//const casual = require('casual');
//const jwt=require('jsonwebtoken');
//const bcrypt=require('bcryptjs');
//const uuid = require("uuid");
//const { array } = require('../middleware/upload');
const { createTableTemplate } = require('./ctUtil');
//const tableTemplate=require('./tableTemplate')
const { table } = require('console');
const fs = require('fs');
const axios = require('axios')
var uuid = require("uuid");
const nodemailer=require('nodemailer')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const path=require('path');
const { randomUUID } = require('crypto');

const mytest= async (req,res,next)=>{
    //console.log(req.body)
    const Data=require(req.modal);
    
    const temp=await Data.find({shopId:"shopa"})
                        .select("-password")
                        .select("-code")
                        .select("-ownerPassword")
                        .select("-ownerCode")
                        .select("-recoveryPassword")
                        .lean()
    //console.log('4444444444')
    //console.log(temp.lenth)
    //console.log(temp)
    /*
    let img = './data/backupData/tree.jpg'
    if(fs.existsSync(img)){
        //console.log(`${img} == existing`)
        res.download(img)

    }
    else{
        res.status(400).json({message:"no such file"})
    }
    */
    res.status(200).json(temp)
}
//----------------------------------
//for all including shop
const init= async (req,res,next)=>{
  //console.log('1')
  //console.log(req.routeAddress)
  //console.log('init')

  const {shopName,password,confirm_password}=req.body
  try{
    if(!shopName){throw {message:"Invalid shopName"}}

    //console.log('2')
    if(!confirm_password){throw {message:"Invalid confirm_password"}}
    //console.log('3')
    if(confirm_password!==process.env.CONFIRM_PASSWORD){throw {message:"Invalid confirm_password"}}
    const Data=require(req.modal);

    //let result = null
    //console.log(req.shopId)
    //console.log('4')
   // //console.log(req.routeAddress)

    if(req.routeAddress=="/tabletemplate/init"){
        //console.log("/tabletemplate/getcustom")
        //userId from userToken
        //console.log('5')
        const resDelete = await Data.deleteMany({shopId:shopName})
        //console.log('6')
        
        const userId=1
        //const branchId=1
        //console.log('7')
        //console.log('lllllll')
        //const tableTemplate=require('./data/initData/tableTemplate')
        const tableTemplate=req.initData

      //  //console.log('8')
       // //console.log(tableTemplate)

        const tempTable=createTableTemplate({tableTemplate:tableTemplate,userId,shopId:shopName})

     //   //console.log('9')
        
        //console.log(tempTable)
        const result = await Data.create(tempTable)
       // //console.log('10')
        //let newData=new Data ({...req.initData,shopId:req.shopId});
        //console.log('11')
        //const result=await newData.save()

        //return res.status(200).json('tableTemplate')
        const temp={data:result,count:1,lastRecordId:userId}
        res.status(200).json(temp)

    }
    else if(req.routeAddress=="/formtemplate/init"){
        const userId=1
        const resDelete = await Data.deleteMany({shopId:shopName})

        const formTemplate=req.initData
       // //console.log('1')
      //  //console.log(formTemplate)
        const result = await Data.create(formTemplate)
        const temp={data:result,count:1,lastRecordId:userId}
        res.status(200).json(temp)

    }
    else if((req.routeAddress=="/group/init")||
            (req.routeAddress=="/product/init")||
            (req.routeAddress=="/branch/init")||
            (req.routeAddress=="/transaction/init")||
            (req.routeAddress=="/partner/init")
    ){
        //const userId=1
        const resDelete = await Data.deleteMany({shopId:shopName})


        //console.log('1')
        //console.log(req.initData)

        const result = await Data.create(req.initData)
        const temp={data:result,count:1,lastRecordId:1}
        res.status(200).json(temp)

    }
    else {
        //console.log('11')
        const resDelete = await Data.deleteMany({shopId:shopName})
        //console.log('12')
        let newData=new Data ({...req.initData,shopId:shopName});
        //console.log('13')
        const result=await newData.save()

        return res.status(200).json(result)
    }
  }
  catch(error){
    return res.status(400).send(error);
  }
}
//--------------------------------------

//get=>localhost:3001/*/restore
const restore=async(req,res,next)=>{
    //console.log('1')
    
    const {shopName,password,filePath,confirm_password,start,stop}=req.body

    //console.log(req.body)


    try{
        if(!shopName){throw {message:"Invalid shopName"}}
        if(!filePath){throw {message:"Invalid filePath"}}
        //console.log('2')
        if(!confirm_password){throw {message:"Invalid confirm_password"}}
       
        if(confirm_password!==process.env.CONFIRM_PASSWORD){throw {message:"Invalid confirm_password"}}
        
        //console.log('3')

        const Data=require(req.modal);
        //console.log('3.5')

        const restoreData = require(`../data/${filePath}`)
        //console.log('4')

        if(!restoreData){throw {message:"Invalid file"} }
        if(!restoreData.table){throw {message:"Wrong filePath"} }
        //console.log('5')
        //end check

        if(Array.isArray(restoreData.table)){
            //console.log('6')
            const datalength=restoreData.table.length
            //console.log(datalength)

            if( (datalength>1000)||(start&&stop) ){    
                //console.log('6.5')
                //console.log(start)
                //console.log(stop)


                if((start>=0)&&(stop>-0)){
                    //console.log('7')

                    if(start==0){
                        await Data.deleteMany({shopId:shopName})     
                    }
                    //console.log('8')

                    let tempDataToCreate=[]
                    for(let k=start;k<=stop;k++){
                        tempDataToCreate=[...tempDataToCreate,restoreData.table[k]] 
                    }

                   //console.log('9')

                    Data.create(tempDataToCreate)
                    .then(result=>{
                        return res.status(200).json({message:`done start : ${start}, stop: ${stop}`})
                    })
                }

                else {
                    //console.log('11')
                    throw {message:`too much restore length : ${datalength}`}
                }
            }
            else {
                //console.log('12')
                await Data.deleteMany({shopId:shopName})     
                //console.log('13')
                await Data.create(restoreData.table)
                //console.log('14')
                return res.status(200).json({message:"restore succesfully"})
            }

        }
        else {
            throw { message:"restoreData is not array" }
        } 
    }
    catch(error){
        return res.status(400).send(error)
    }
}
//------------------------------------
//get=>localhost:3001/*/backup
//all backup to file
const backup=async(req,res,next)=>{
    const {shopName,password,filePath,confirm_password}=req.body
    try{
        if(!shopName){throw {message:"Invalid shopName"}}

        if(!confirm_password){throw {message:"Invalid confirm_password"}}
        if(confirm_password!==process.env.CONFIRM_PASSWORD){throw {message:"Invalid confirm_password"}}

        let temp=req.routeAddress.split("/")
        const today=new Date().toISOString()
        const year=today.substring(0,4)
        const month=today.substring(5,7)
        const date=today.substring(8,10)
        const fileName=`${date}_${month}_${year}_${temp[1]}.json`
        const fullPath=`${req.backupData}${fileName}`

        //check ShopName,password

        const Data=require(req.modal);

        const result= await Data.find({shopId:shopName})
                      .select("-_id")
                      .select("-address._id")
                      .select("-routeAuth._id")
                      .select("-template._id")
                      .select("-transactionType._id")
                      .select("-detail._id")
                      .lean()
        if(!result){throw {message:`Invalid ${temp[1]}`}}

        const obj={table:result}
        const json = JSON.stringify(obj);
       
        //fs.writeFile(fullPath, json, function (err) {if (err) return //console.log(err);//console.log('Hello World > helloworld.txt');});
        
        fs.writeFile(fullPath, json, 'utf8', 
            (err)=>{ 
                if(err){
                   throw {message:`${temp[1]} backup fail`}
                }
                else {
                    return res.status(200).json({message:`${temp[1]} backup succesfully`}) 
                }
            }
        );
    }
    catch(error){
        return res.status(400).send(error);
    }
}
//================================
//================================
//================================

//post=>localhost:3001/*/getcustom
//for user,group,tabletemplate,basicdata
const getcustom=async(req,res,next)=>{
    //console.log('1')
    const Data=require(req.modal);
    //shopId from shopToken
    const shopId=req.shopId
    //console.log('getcustomer req.user ...........')
    //console.log(req.user)
    const userId=req.user.id

    //console.log(req.shopId)
    let {sort,...remaining}=req.body
    if(!sort){ sort={id:1} }
    
    let qryObject

    try{
        if(req.routeAddress=="/tabletemplate/getcustom"){
            //console.log("/tabletemplate/getcustom")
            //userId from userToken
            //console.log('1')
            //const branchId=req.user.branchId
            //console.log(`userId ${userId}`)
            
            //qryObject={id:branchId,...remaining,shopId}
            qryObject={id:userId,shopId}

            const count = await Data.find(qryObject).lean().countDocuments()
            //console.log(`count ${count}`)
            //if(true){
            if(!count||count<1){
                //console.log('lllllll')
                //const tableTemplate=require('./data/initData/tableTemplate')
                const tableTemplate=req.initData

                const tempTable=createTableTemplate({tableTemplate,userId,shopId})

                //console.log('qqqqqqq')
                
                //console.log(tempTable)
                const result = await Data.create(tempTable)
                //console.log('11')
                //let newData=new Data ({...req.initData,shopId:req.shopId});
                //console.log('12')
                //const result=await newData.save()
        
                //return res.status(200).json('tableTemplate')
                const temp={data:result,count:1,lastRecordId:userId}
                res.status(200).json(temp)
            }
            else{
                const lastRecord = Data.findOne(qryObject).sort({id:-1})
                const result= Data.find(qryObject).lean()
                                .select("-password")
                                .select("-code")
                                .select("-ownerPassword")
                                .select("-ownerCode")
                                .select("-recoveryPassword")
                                //.select("-shopId")
                                .sort(sort)
                let temp
                Promise.all([result,lastRecord])
                .then((results)=>{
                    //console.log(results)
                    let tempResult1=null

                    if(results[1]){
                        tempResult1=results[1].id
                    }

                    temp={data:results[0],count,lastRecordId:tempResult1}
                    res.status(200).json(temp)
                });
            }
        }

        /*
        else if(req.routeAddress=="/branch/getcustom"){
            //console.log('branch getcustom ..........')
            //console.log(req.user)
            //const branchId=req.user.branchId
            //const branchName=req.user.branchName
            qryObject={
                        //id:branchId,
                        shopId:shopId
                    }

            const count = await Data.find(qryObject).lean().countDocuments()

            if(!count||count<1){

                const tempData=[{...req.initData[0],
                                 //id:branchId,branchName:branchName,
                                 shopId:shopId}]
                //const newData=new Data ({...req.initData[0],id:branchId});
                //await newData.save();
                //return res.status(200).send({message:"add custom successfully"})

                const result = await Data.create(tempData)

                const temp={data:result,count:1,lastRecordId:branchId}
                res.status(200).json(temp)

            }
            else{
                const lastRecord = Data.findOne(qryObject).sort({id:-1})

                const result= Data.find(qryObject).lean()
                                .select("-password")
                                .select("-code")
                                .select("-ownerPassword")
                                .select("-ownerCode")
                                //.select("-shopId")
                                .sort(sort)
                let temp
                Promise.all([result,lastRecord])
                .then((results)=>{
                    //console.log(results)
                    temp={data:results[0],count,lastRecordId:results[1].id}
                    res.status(200).json(temp)
                });
            }
            
        }
        */
        else{
            qryObject={...remaining,shopId,id:{$gte:1}}

            //console.log('getcustom other..........')

            const count = Data.find(qryObject).lean().countDocuments()

            const lastRecord = Data.findOne({shopId}).sort({id:-1})
            const result= Data.find(qryObject).lean()
                            .select("-password")
                            .select("-code")
                            .select("-ownerPassword")
                            .select("-ownerCode")
                            //.select("-shopId")
                            .sort(sort)
            let temp
            Promise.all([result, count,lastRecord]).then((results)=>{
                //console.log(results)
                temp={data:results[0],count:results[1],lastRecordId:results[2].id}
                //console.log('result temp.....')
                //console.log(temp)
                res.status(200).json(temp)
            });
            
        }
    }
    catch(error){
        return res.status(400).send({message:"getcustom fail"})
    }
}
//=====================================

//=====================================
//post=>localhost:3001/*/getlimit
//for user,job,bill,transaction,transactionlog,product,customer,partner
const getlimit=async (req,res,next)=>{
    const Data=require(req.modal);
    const shopId=req.shopId
    //const branchId=req.user.branchId

    //console.log('getlimit....')
    //console.log('req.body')
    //console.log(req.body)

    let {pageNumber,sort,limitRow,id,...remaining}=req.body

    if(!limitRow){limitRow=10}
    if(limitRow<1){limitRow=1}
    //if(limitRow>50){limitRow=50}

    if(!pageNumber){ pageNumber=1 }
    else if(pageNumber<1){ pageNumber=1 }

    if(!sort){ sort={id:1} }

    //console.log('2....')
    //console.log(req.body)
    //console.log(req.routeAddress)
    //console.log(remaining)
    try{
        //console.log('3.....')
        if(req.routeAddress=="/transaction/getlimit"
        
        ){
            //console.log('.....4')
            const count = Data.find({...remaining,shopId,
                                        //branchId
                                    }).lean().countDocuments()
            //console.log('.....4...1')

            if(!count){
                //console.log('no count')
            }
            //count of renderBage
            //console.log('5')
            const lastRecord = Data.findOne({shopId,
                                //branchId
                                }).sort({id:-1})
            //console.log('5...1')
            if(!lastRecord){
                //console.log('no lastRecord')
            }
            //for add form
            //console.log('6')
            if(id){
                remaining={...remaining,id:{$gte:1,$eq:id}}
            }
            else{
                remaining={...remaining,id:{$gte:1}}
            }
            //console.log('7')
            //console.log('22222222')
            //console.log(remaining)
            const result= Data.find({...remaining,shopId,
                                    //branchId
                                    }).lean()
                            .skip((pageNumber-1)*limitRow).limit(limitRow)
                            .select("-password")
                            .select("-code")
                            .select("-ownerPassword")
                            .select("-ownerCode")
                            .select("-recoveryPassword")
                            //.select("-shopId")
                            .sort(sort)
            //console.timeEnd('getlimit')
            //console.log('8')

           
            let temp
            Promise.all([result, count,lastRecord]).then((results)=>{

                let tempResult2=null

                if(results[2]){
                    tempResult2=results[2].id
                }
                //console.log(results)
                temp={data:results[0],count:results[1],lastRecordId:tempResult2}
                res.status(200).json(temp)
            });

        }
        else{
            //console.log('10')
            const count = Data.find({...remaining,shopId}).lean().countDocuments()
            //count of renderBage
            //console.log('11')
            const lastRecord = Data.findOne({shopId}).sort({id:-1})
            //for add form
            //console.log('12')
            if(id){
                remaining={...remaining,id:{$gte:1,$eq:id}}
            }
            else{
                remaining={...remaining,id:{$gte:1}}
            }
            //console.log('333333333')
            //console.log(remaining)
            //console.log('13')
            const result= Data.find({...remaining,shopId}).lean()
                            .skip((pageNumber-1)*limitRow).limit(limitRow)
                            .select("-password")
                            .select("-code")
                            .select("-ownerPassword")
                            .select("-ownerCode")
                            .select("-recoveryPassword")
                            //.select("-shopId")
                            .sort(sort)
            //console.timeEnd('getlimit')
            let temp

            //console.log('14')
            Promise.all([result, count,lastRecord]).then((results)=>{
                //console.log(results)
                temp={data:results[0],count:results[1],lastRecordId:results[2].id}
                res.status(200).json(temp)
            });
        }

    }
    catch (error){
        return res.status(400).send({message:"getlimit fail"})
    }
    
}
//==============================
//==============================

//post=>localhost:3001/*/deleteall
//for all in shopId
const deleteall=async(req,res,next)=>{
    
    const Data=require(req.modal);
    const shopId=req.shopId
    //console.log(shopId)
    try{        
        const resDelete = await Data.deleteMany({shopId})
        //console.log(resDelete)
        return res.status(200).json({message:"delete all succesfully"})
    }
    catch(error){
        return res.status(404).send({message:"delete all fail"})
    }
    
}
//===========================
const deletemany=async(req,res,next)=>{
    
    const Data=require(req.modal);
    const shopId=req.shopId
    //const branchId=req.user.branchId

    //console.log(shopId)
    const {id}=req.body
    //console.log('1')
    //console.log(req.body.id)
    //console.log(req.body.id['$in'])

    try{        
        if(!id){throw{message:"Invalid ID"}}
       
        id['$in'].map(i=>{
            if(!i){throw{message:"Invalid ID"}}
            if(i<1){throw{message:"Invalid ID"}}
        })

        const resDelete = await Data.deleteMany({id:req.body.id,shopId})
        //console.log(resDelete)
        return res.status(200).json({message:"delete many succesfully"})
    }
    catch(error){
        return res.status(404).send({message:"delete many fail"})
    }
    
}
//---------------------------
//for all in shopId
//if delete user, tableTemplate get delete as well
const deletecustom=async(req,res,next)=>{
    
    const shopId=req.shopId
    const {id}=req.body

    //console.log('1')
    //console.log(req.body)    

    try{
        if(!id){throw {message:"Invalid ID"}}

        if(req.routeAddress=="/user/deletecustom"){
            let Data    
            if(process.env.AUTH_CONNECTION=="true"){
                Data=require('../modals/Auth').User;
            }else{
                Data=require('../modals/User')
            }  
            
            await Data.deleteMany({id,shopId})
            const TableTemplate=require('../modals/TableTemplate'); 
            await TableTemplate.deleteMany({id,shopId})
            return res.status(200).json({message:"delete custom User succesfully"})
        }
        else {
            const Data=require(req.modal);

            await Data.deleteMany({id,shopId})
            return res.status(200).json({message:"delete custom succesfully"})
        }
    }
    catch (error){
        return res.status(400).send({message:"delete custom fail"})
    }
    
}
//--------------------------------
const deletegroup=async(req,res,next)=>{
    const Data=require(req.modal);
    const shopId=req.shopId

    const {allDeleteId}=req.body
    //console.log('1')
    //console.log(allDeleteId)
    try{
        if(!allDeleteId){throw {message:"Invalid deleteId"}}
        if(!Array.isArray(allDeleteId)){throw {message:"Invalid deleteId"}}

        allDeleteId.map(id=>{
            if(id==1){throw{message:"Invalid deleted ID"}}
        })
            
        if(allDeleteId.length>0){
            await Data.deleteMany({id:{$in:allDeleteId},shopId})
        }
            
        return res.status(200).json({message:"delete group succesfully"})
    }
    catch (error){
        return res.status(400).send({message:"delete group fail"})
    }
}
//--------------------------------
const deletetransaction=async(req,res,next)=>{
    
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id
    //const branchId=req.user.branchId

    const {id}=req.body

    try{
        if(!id&&id<1){ throw {message:'Id is invalid'} }
        if(!shopId){ throw {message:'Invalid Shop'}  }   
        //if(!branchId&&branchId<1){ throw {message:'Invalid Branch'}  }   

        //console.log(1)
        const resFindId = await Data.findOne({ id,shopId,
                                                //branchId
                                            }).lean()
        if(!resFindId) { throw "Invalid Transaction"}

        //console.log(2)
        else{
            const prevDetail=resFindId.detail
            const {effectStock,effectSpending,effectCustomerPoint,
                   partnerId,total,
                   totalPoint,reductCustomerPoint}=resFindId


            //await Data.deleteOne({id,shopId})
            let allPromise=[]

            //console.log(3)
            const Partner=require('../modals/Partner'); 
            const resFindPartner = await Partner.findOne({ id:partnerId,shopId}).lean()

            //console.log(resFindPartner)
            //console.log(4)
            if(resFindPartner){

                let spendingChange=0
                let spendingFactor=0

                if(effectSpending=="+"){spendingFactor=1}
                if(effectSpending=="-"){spendingFactor=-1}

                spendingChange=(0-total)*spendingFactor

                let customerPointChange=0
                let customerPointFactor=0

                if(effectCustomerPoint=="+"){customerPointFactor=1}
                if(effectCustomerPoint=="-"){customerPointFactor=-1}

                customerPointChange=(0-(totalPoint-reductCustomerPoint))*spendingFactor

                allPromise= [...allPromise,
                    Partner.updateOne(
                        {id:partnerId,shopId},
                        {$inc:{"remainingCustomerPoint":customerPointChange,
                            "totalSpending":spendingChange
                        }}
                    )
                ]
            }

            //console.log(5)
            const Product=require('../modals/Product'); 

            let stockChange=0
            let stockFactor=0

            if(effectStock=="+"){stockFactor=1}
            if(effectStock=="-"){stockFactor=-1}
          
            //console.log(6)
            for (let j=0;j<prevDetail.length;j++){
                stockChange=(0-prevDetail[j].quantity)*stockFactor
                
                allPromise=[...allPromise,
                    Product.updateOne(
                        {id:prevDetail[j].id,shopId},
                        {$inc:{"stock":stockChange,
                               }}
                    )
                ]
            }

            //console.log(7)

            allPromise=[...allPromise,
                Data.deleteOne({id,shopId})
            ]
    
            await Promise.all(allPromise)
           
            //console.log(8)
            return res.status(200).json({message:"delete tabletemplate succesfully"})

        }
       
    }
    catch (error){
        return res.status(400).send({message:"delete fail"})
    }
    
}
//===============================
//===============================
//===============================
//==============
/* form-data
query[id] :5
query[groupName] : five
query[children] :
query[shopId] : 5f7e8e2ec016e550dbe3c6d2
query[parentId] : 0
*/
//==================
//check filed "photoUrl_"
//check if it is = [""]
//check if it is =["/upload/job/01_21_2021/bb.jpg",...]
//check if it is = ["/upload/job/bb_.jpg"] change to be"/upload/job/01_21_2021/bb.jpg"

const addDateFolderToUrl=(reqBody,reqFolder,reqShopId)=>{
    
    let tempPhotoObj={}
    //ต้องการตามหา key ที่ขึ้นต้นด้วย photoUrl
    const arrayOfKeyName=Object.keys(reqBody)
    
    for (j=0;j<arrayOfKeyName.length;j++){
        //i = field name such as 'id','photoUrl','tempPhotoUrl'
        const i = arrayOfKeyName[j]
        
        //to find photoUrl_ filed
        if(i.substring(0, 8)=="photoUrl"){
            //console.log('subString(0,8)')
            //============================
            //in case no photoUrl, just break out
            if(reqBody[i].length==1){
                if(reqBody[i][0]==""){
                    break;
                }
            }           
            
            //=============================
            let newUrlArray=[] 
            //req.body['photoUrl1'].length > 0
            if(reqBody[i].length>0){ 
                //at least should have photoUrl=[""]
                reqBody[i].map(j=>{
                    let temp=j.split("/")
                    //"https://picsum.photos/200"
                    // ไม่ต้องเปลี่ยนไร
                    if(temp[0]=="https"||temp[0]=="http"){
                        newUrlArray=[...newUrlArray,j]
                    }
                    //upload/job/01_21_2021/room-1.jpg
                    //temp=["","upload","job","01_21_2021","room-1.jpg"]
                    //ถ้า คือ 5 ไม่ต้องเปลี่ยนไร 
                    if(temp.length==5){
                        newUrlArray=[...newUrlArray,j]
                    }
                    if(temp.length==1){
                        //temp[0]=["room-1.jpg"] we just add a file on client
                        //we need to put "/upload/job/01_21_2021"
                        if(temp[0]!=""){
                            newUrlArray=[...newUrlArray,`/${reqFolder}/${reqShopId}-${j}`] 
                        }
                    }
                })
                //check
                //console.log('newUrlArray')
                //console.log(newUrlArray)
            }
            if(newUrlArray.length>0){   
                //tempPhotoObj={...tempPhotoObj,
                //    ['photoUrl1'],["/upload/customer/01_21_2021/lcd.jpg"]}
                tempPhotoObj={...tempPhotoObj,[i]:newUrlArray}
            }
            
        }    
    }

    //console.log('tempPhotoObj.......')
    //console.log(tempPhotoObj)
    return tempPhotoObj
    
}
//---------------------------
//get=>localhost:3001/*/addcustom
//all except user,shop,tableTemplate,transaction
const addcustom= async(req, res, next) => {
    const Data=require(req.modal); 
    const shopId=req.shopId
    const userId=req.user.id
    const {id}=req.body
    const {shopName,ownerName,username,password,ownerPassword,detail,
           ...remaining}=req.body

    //console.log('1')
    //console.log(id)
    //console.log(req.body.formLanguage)
    //console.log(req.body.template[0])

    try{
        //check id
        if(!id&&id<1){ throw {message:'Id is invalid'} }
        if(!shopId){ throw {message:'Invalid Shop'}  }   
        //console.log('2')


        //check user shop
        if(shopName||ownerName||username||password||ownerPassword){ 
            throw {message:"No username or password add allowed"}
        }
        
        const resFindId = await Data.findOne({ id,shopId }).lean()
        if(resFindId){ throw {message:"ID already exists"} }
        
        let dataTosave={...remaining,shopId,userId}
        //console.log('3')


        if(detail){
            let tempArray=[]
            detail.map(i=>{
                const {_id,...rm}=i
                tempArray=[...tempArray,{...rm}]
            })
            
            //console.log(tempArray)
            dataTosave={...dataTosave,detail:tempArray}
        }
        //console.log('1')


        //add photo
        const tempPhotoObj=addDateFolderToUrl(req.body,req.folder,req.shopId)
        //console.log('4')

        if(Object.keys(tempPhotoObj).length>0){
            dataTosave={...dataTosave,...tempPhotoObj}
        }
        //console.log('5')
        //console.log(dataTosave)

        const newData=new Data (dataTosave);
        await newData.save();
        return res.status(200).send({message:"add custom successfully"})

    }
    catch (error){
        return res.status(400).send({message:"add custom fail"})
    }
}
//------------------------------
const addgroup= async(req, res, next) => {
   
}

//------------------------------
const addtransaction= async(req, res, next) => {
    
    const Data=require(req.modal); 

    const shopId=req.shopId
    const userId=req.user.id
    //const branchId=req.user.branchId
    const {shopName,ownerName,username,password,ownerPassword,
           ...remaining}=req.body
    const {id,
            effectStock,effectSpending,effectCustomerPoint,detail,
            reductCustomerPoint,total,
            totalPoint,grandTotal,transactionType,partnerId}=req.body
    
    //console.log('1...req.body')
    //console.log(req.body)

    try {
        //check id
        if(!id&&id<1){ throw {message:'Id is invalid'} }
        if(!shopId){ throw {message:'Invalid Shop'}  }   
        //if(!branchId&&branchId<1){ throw {message:'Invalid Branch'}  }   

        //check user shop
        if(shopName||ownerName||username||password||ownerPassword){ 
            throw {message:"No username or password add allowed"}
        }

        //console.log('2')
        if(!effectSpending){throw {message:"no effectSpending"}}
        if(!effectStock){throw {message:"no effectStock"}}
        if(!effectCustomerPoint){throw {message:"no effectCustomerPoint"}}


        if(!total){
            if(total!==0){
                {throw {message:"Invalid Total"}}
            }
        } 
        if(!totalPoint){
            if(totalPoint!==0){
                {throw {message:"Invalid Total Point"}}
            }
        }

        if(!reductCustomerPoint){
            if(reductCustomerPoint!==0){
                {throw {message:"Invalid Reduct Customer Point"}}
            }
        }

        if(!transactionType){throw {message:"Invalid Transaction Type"}}
        //console.log('3')
        if(!detail){throw {message:"Invalid detail"}}
        if(!Array.isArray(detail)){throw {message:"Invalid detail2"}}
        //if(!groupId){throw {message:"no groupId"}}

        const resFindId = await Data.findOne({id,shopId}).lean()
        if(resFindId){ throw {message:"ID already exists"} }
        
        //console.log('4')
        let dataTosave={...remaining,shopId,userId}    

        //add photo
        const tempPhotoObj=addDateFolderToUrl(req.body,req.folder,req.shopId)
        
        //console.log('5')
        if(Object.keys(tempPhotoObj).length>0){
            dataTosave={...dataTosave,...tempPhotoObj}
        }

        //console.log('6')
        //console.log(dataTosave)

        const newData=new Data(dataTosave) 
        //const resSave = await newData.save() 

        //let allPromise=[
            await newData.save()
        //]

        const Partner=require('../modals/Partner'); 
        const resFindPartner = await Partner.findOne({ id:partnerId,shopId,}).lean()
        //console.log(resFindPartner)
        if(resFindPartner){
            //allPromise= [...allPromise, 

                let spendingChange=0
                let customerPointChange=0

                let spendingFactor=0
                let customerPointFactor=0

                if(effectSpending=="+"){spendingFactor=1}
                if(effectSpending=="-"){spendingFactor=-1}

                if(effectCustomerPoint=="+"){customerPointFactor=1}
                if(effectCustomerPoint=="-"){customerPointFactor=-1}

                spendingChange=parseFloat(total)*spendingFactor
                customerPointChange=parseFloat(totalPoint-reductCustomerPoint)*customerPointFactor

                await Partner.updateOne(
                {id:partnerId,shopId},
                {$inc:{"remainingCustomerPoint":customerPointChange,
                        "totalSpending":spendingChange
                }}
            )
            //]
        }
        
        //console.log('7')

        //updat Product (stock,order,plan)
        const Product=require('../modals/Product'); 
        
        let stockChange=0

        let stockFactor=0

        if(effectStock=="+"){stockFactor=1}
        if(effectStock=="-"){stockFactor=-1}
        
        //console.log('8')

        for (let j=0;j<detail.length;j++){
            stockChange=parseFloat(detail[j].quantity)*stockFactor

            //allPromise=[...allPromise,
                await Product.updateOne(
                    {id:detail[j].id,shopId},
                    {$inc:{"stock":stockChange,
                    }}
                )
            //]        
        }
        //console.log('9')

        //const result=await Promise.all(allPromise)
        
        //console.log(result)

        return res.status(200).json({message:"add transaction succesfully"})
    }
    catch (error){
        //console.log(error)
        return res.status(400).send(error)
    }
    
}

//===========================
//============================
//all exclud shop,user,tabletemplate
const updatecustom=async (req,res,next)=>{
    //console.log('updatecustom 882')
    //console.log(req.body)
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id
    //const branchId=req.user.branchId

    const {_id,id,newId,username,password,shopName,
              ownerName,ownerPassword,detail,
              ...remaining}=req.body

    let qryObject={id,shopId}
    
    //if(req.routeAddress=="/branch/updatecustom"){
    //    qryObject={id:branchId,shopId}
    //}

    try{
        //check user shop
        if(shopName||ownerName||username||password||ownerPassword){ 
            throw {message:"No username or password update allowed"}
        }

        if(!id&&id<1){ throw {message:"Invalid Id"}}
       
        let dataTosave
        if(id!=newId&&newId>0){
            
            const resFindId = await Data.findOne({ id:newId,shopId }).lean()
            if(resFindId){ throw {message:"Invalid New ID"} }

            dataTosave={...remaining,shopId,userId,id:newId}
        }
        else {
            dataTosave={...remaining,shopId,userId}
        }

        
        if(detail){
            let tempArray=[]
            detail.map(i=>{
                const {_id,...rm}=i
                tempArray=[...tempArray,{...rm}]
            })
            //console.log('tempArray.........')
            //console.log(tempArray)
            dataTosave={...dataTosave,detail:tempArray}
        }

        const tempPhotoObj=addDateFolderToUrl(req.body,req.folder,req.shopId)

        if(Object.keys(tempPhotoObj).length>0){
            dataTosave={...dataTosave,...tempPhotoObj}
        }

        //console.log('dataTosave')
        //console.log(dataTosave)

        //console.log('qryObject')
        //console.log(qryObject)

        const resUpdate=await Data.updateOne(
            qryObject,
            {$set:{...dataTosave}}
        )
        return res.status(200).json({message:"update custom succesfully"})
    }
    catch (error){
        return res.status(400).send({message:"update custom fail"})
    }
}
//----------------------------------------
const updategroup=async (req,res,next)=>{
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id
    const {toDelete,toUpdate}=req.body

    //console.log('1')
    //console.log(toDelete)
    //console.log('2')
    //console.log(toUpdate)
    try{
        //console.log('2')
        if(!Array.isArray(toDelete.id['in'])){throw{message:"Invalid Group"}}
        toDelete.id['in'].map(id=>{
            if(id==1){throw{message:"Invalid Group"}}
        })
        
        await Data.deleteMany({...toDelete,shopId:shopId})
        //console.log('3')

        if(!Array.isArray(toUpdate)){throw{message:"Invalid Group"}}

        let tempArray=[]
        toUpdate.map(i=>{
            const {_id,...remaining}=i
            if(i.id==1){throw{message:"Invalid Group"}}
            const tempObj={...remaining,shopId,userId}
            tempArray=[...tempArray,tempObj]
        })
        await Data.create(tempArray)
        //console.log('4')
        return res.status(200).json({message:"updategroup succesfully"})
    }
   
    catch (error){
        return res.status(400).send({message:"updategroup fail"})
    }

}
//----------------------------------------

//----------------------------------------

const updatetabletemplate=async (req,res,next)=>{
    
    const Data=require(req.modal);
    const shopId=req.shopId
    //const branchId=req.user.branchId
    const userId=req.user.id

    const {tableName,template}=req.body
    const qryObject = {tableName,shopId,id:userId}

    try{    
        if(!tableName){ throw {message:"tableName do not exist"} }
        if(!template){ throw {message:"template do not exist"} }

        const dataTosave={template}
        
        await Data.updateOne(
            qryObject,
            {$set:{...dataTosave}}
        )
        return res.status(200).json({message:"update tabletemplate succesfully"})
    }
    catch (error){
        //console.log(error)
        return res.status(400).send({message:"update tabletemplate fail"})
    }
    
}

const updateformtemplate=async (req,res,next)=>{
    
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id

    const {formName,formLanguage,template}=req.body
    const qryObject = {tableName,shopId,id:userId}

    try{    
        if(!formName){ throw {message:"formName do not exist"} }
        if(!formLanguage){ throw {message:"formLanguage do not exist"} }
        if(!template){ throw {message:"template do not exist"} }

        const dataTosave={template}
        
        await Data.updateOne(
            qryObject,
            {$set:{...dataTosave}}
        )
        return res.status(200).json({message:"update formtemplate succesfully"})
    }
    catch (error){
        //console.log(error)
        return res.status(400).send({message:"update formtemplate fail"})
    }
    
}

//-------------------------------
const updatetransactionstatus=async (req,res,next)=>{
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id


    const {id,jobStatus,queueStatus,detail}=req.body
    try {
        //console.log('1')
        //console.log(req.body)

        let dataTosave={jobStatus,queueStatus,detail}

        if(!id&&id<1){ throw {message:'Id is invalid'} }

        const temp=await Data.updateOne(
            {id:id,shopId},
            {$set:{...dataTosave}}
        )
        
        return res.status(200).json({message:"update transaction succesfully"})

    }        

    catch (error){
        //console.log(error)
        return res.status(400).send({message:"update transaction fail"})
    }  

}

//-------------------------------
const updatetransaction=async (req,res,next)=>{
    //console.log('updatetransaction')
    const Data=require(req.modal);
    const shopId=req.shopId
    const userId=req.user.id
    //const branchId=req.user.branchId

    const {id,newId,username,password,shopName,
             ownerName,ownerPassword,
             ...remaining}=req.body

    const {effectStock,effectSpending,effectCustomerPoint,detail,transactionType,
           totalPoint,total,reductCustomerPoint,partnerId}=req.body
    //groupId
    
    try {
        //console.log('1')
        //console.log(req.body)

        if(!id&&id<1){ throw {message:'Id is invalid'} }
        if(newId){ throw {message:'Id can not be changed'} }

        if(!shopId){ throw {message:'Invalid Shop'}  }   
        //if(!branchId&&branchId<1){ throw {message:'Invalid Branch'}  }   

        //console.log(2)
        if(!effectSpending){throw {message:"no effectSpending"}}
        if(!effectStock){throw {message:"no effectStock"}}
        if(!effectCustomerPoint){throw {message:"no effectCustomerPoint"}}

        if(!totalPoint){
            if(totalPoint!==0){
                {throw {message:"Invalid Total Point"}}
            }
        } 
        if(!total){
            if(total!==0){
                {throw {message:"Invalid Total"}}
            }
        }
        if(!reductCustomerPoint){
            if(reductCustomerPoint!==0){
                {throw {message:"Invalid Reduct Customer Point"}}
            }
        }

        if(!transactionType){throw {message:"Invalid Transaction Type"}}

        //console.log(3)
        if(!detail){throw {message:"Invalid detail"}}
        if(!Array.isArray(detail)){throw {message:"Invalid detail"}}

        //if(!groupId){throw {message:"no groupId"}}

        if(shopName||ownerName||username||password||ownerPassword){ 
            throw {message:"No username or password add allowed"}
        }
        //ถ้าเงื่อนไขต่างไปจากนี้ ควรใช้ bill แทน transaction
        //ถ้า groupId เหมือนเดิม
        //นำ detail อันใหม่ เทียบกับ detail อันเก่า
        //แก้ไข product (stock, order, plan) 
        //อาศัยค่า ของ effectStock,effectOrder,effectPlan
        //ถ้า groupId เปลี่ยน
        //แก้ไข product (stock, order, plan) 
        //บันทึก TransactionLog ด้วย 
        
        //Find transaction before update
        //console.log('4')
        //check user shop
        const resFindId = await Data.findOne({ id,shopId }).lean()

        //ค้นหา ID  ที่ต้องการอัพเดท
        //console.log('5')
        if(!resFindId){throw {message:"no transaction found"}}
        //console.log(resFindId)
        //ถ้าเจอ
        
        if(resFindId){
                if(transactionType!=resFindId.transactionType){
                    throw {message:'Invalid Transaction Type'}
                }
                if(effectSpending!=resFindId.effectSpending){
                    throw {message:'Invalid effectSpending'}
                }
                if(effectCustomerPoint!=resFindId.effectCustomerPoint){
                    throw {message:'Invalid effectCustomerPoint'}
                }
                if(effectStock!=resFindId.effectStock){
                    throw {message:'Invalid effectStock'}
                }

                //console.log(6)
                const dataTosave={...remaining}

                //let allPromise=[
                const temp=await Data.updateOne(
                        {id:id,shopId},
                        {$set:{...dataTosave}}
                    )
                //]
                //--------------
                //console.log(temp)
                //console.log(7)
                
                const Partner=require('../modals/Partner'); 

                let prevTotalPoint=resFindId.totalPoint
                let prevReductCustomerPoint=resFindId.reductCustomerPoint
                let prevTotal=resFindId.total

                let spendingChange=0
                let customerPointChange=0

                let spendingFactor=0
                let customerPointFactor=0

                if(effectSpending=="+"){spendingFactor=1}
                if(effectSpending=="-"){spendingFactor=-1}

                if(effectCustomerPoint=="+"){customerPointFactor=1}
                if(effectCustomerPoint=="-"){customerPointFactor=-1}

                spendingChange=parseFloat(total)*spendingFactor
                customerPointChange=parseFloat(totalPoint-reductCustomerPoint)*customerPointFactor

                let prevSpendingChange=0
                let prevCustomerPointChange=0  

                prevSpendingChange=parseFloat(prevTotal)*spendingFactor
                prevCustomerPointChange=parseFloat(prevTotalPoint-prevReductCustomerPoint)*customerPointFactor

                await Partner.updateOne(
                    {id:partnerId,shopId},
                    {$inc:{"remainingCustomerPoint":0-prevCustomerPointChange+customerPointChange,
                            "totalSpending":0-prevSpendingChange+spendingChange
                    }}
                )

                //------------------
                //console.log(8)
                let prevDetail=resFindId.detail

                let tempUnique=[]

                    prevDetail.map(i=>{
                        tempUnique=[...tempUnique,i.id]
                        //console.log(`prev id ${i.id}`)
                    })

                    detail.map(i=>{
                        tempUnique=[...tempUnique,i.id]
                        //console.log(`temp id ${i.id}`)

                    })

                tempUnique=[...new Set(tempUnique)]
                
                //console.log('tempUnique')
                //console.log(tempUnique)

                let finalDetail=[]

                tempUnique.map(id=>{
                    let tempQty=0
                    //console.log(`id: ${id}`)
                    prevDetail.map(j=>{
                        if(id==j.id){
                            tempQty=tempQty-j.quantity
                            //console.log(`prevDetail= ${j.quantity}`)
                        }
                    })
                    detail.map(k=>{
                        if(id==k.id){
                            tempQty=tempQty+k.quantity
                            //console.log(`temp=${k.quantity}`)
                        }
                    })

                    finalDetail=[...finalDetail,{id:id,quantity:tempQty}]
                })
            
                //console.log(9)

                //console.log(finalDetail)

                const Product=require('../modals/Product'); 
        
                let stockChange=0
        
                let stockFactor=0
        
                if(effectStock=="+"){stockFactor=1}
                if(effectStock=="-"){stockFactor=-1}

        
                for (let j=0;j<finalDetail.length;j++){

                    stockChange=finalDetail[j].quantity*stockFactor



                    //console.log('stockChange')
                    //console.log(stockChange)

                    //allPromise=[...allPromise,
                    
                        await Product.updateOne(
                            {id:finalDetail[j].id,shopId},
                            {$inc:{"stock":stockChange,
                                }}
                        )
                       
                    //]        
                }
                //console.log(10)

            //const result=await Promise.all(allPromise)
            return res.status(200).json({message:"update transaction succesfully"})

        }        
    }
    catch (error){
        //console.log(error)
        return res.status(400).send({message:"update transaction fail"})
    }  
}
//======================
const payshopfee=async (req,res,next)=>{
    //console.log('payshopfee')
    try {

        //console.log('1')

        let ShopPayment
        let Shop
        if(process.env.AUTH_CONNECTION=="true"){
            ShopPayment=require('../modals/Auth').ShopPayment;
            Shop=require('../modals/Auth').Shop;
        }else{
            ShopPayment=require('../modals/ShopPayment')
            Shop=require('../modals/Shop');

        }  

        //console.log('2')
        
        //console.log(req.shopId)
        //console.log(req.body)

        const tempPhotoObj=addDateFolderToUrl(req.body,req.folder,req.shopId)
        //console.log('3')

        const resultFind=await Shop.findOne({shopName:req.shopId}).lean()

        //console.log('4')
        const {dateIn,ownerName,ownerSurName,ownerEmail,
              expirationDate,tempExpirationDate,monthlyFee,remainingBalance}=resultFind

        let dataTosave

        //console.log('5')
        if(resultFind){
            dataTosave={
                dateIn,  
                ownerName,
                ownerSurName,
                ownerEmail,
                expirationDate,
                tempExpirationDate,
                monthlyFee,
                remainingBalance,
                hasProblem:false
            }
        }
        else{
            dataTosave={
                dateIn:"",  
                ownerName:"",
                ownerSurName:"",
                ownerEmail:"",
                expirationDate:"",
                tempExpirationDate:"",
                monthlyFee:"",
                remainingBalance:"",
                hasProblem:true,
            }
        }
        //console.log('tempPhotoObj')
        //console.log(tempPhotoObj)

        //console.log('6')
        dataTosave={
            id:Date.now(),
            shopId:req.shopId,
            timestamp:new Date().toISOString(),
            isCheck:false,
            ...dataTosave,
            ...tempPhotoObj
        }

        //console.log('dataTosave')
        //console.log(dataTosave)

        //console.log('7')
        const newData=new ShopPayment(dataTosave);
        await newData.save();
        //console.log('8')

        const temp4=await ShopPayment.find({shopId:req.shopId})
        //console.log('temp4')
        //console.log(temp4)

        //console.log('9')
        return res.status(200).send({message:"pay shop fee"})
    }
    catch(error){
        ////authConnection.close()
        return res.status(400).send(error);
    }
}

const getshoppayment=async (req,res,next)=>{

    console.log('getshoppayment')

    console.log(req.body)
    const shopId=req.shopId

    if(process.env.AUTH_CONNECTION=="true"){
        ShopPayment=require('../modals/Auth').ShopPayment;
    }else{
        ShopPayment=require('../modals/ShopPayment')
    }  

    let {pageNumber,sort,limitRow,id,...remaining}=req.body

    if(!limitRow){limitRow=10}
    if(limitRow<1){limitRow=1}
    //if(limitRow>50){limitRow=50}

    if(!pageNumber){ pageNumber=1 }
    else if(pageNumber<1){ pageNumber=1 }

    if(!sort){ sort={id:1} }

    console.log('2....')
    //console.log(req.body)
    //console.log(req.routeAddress)
    //console.log(remaining)
    try{
        console.log('3.....')
    
            //console.log('10')
            const count = ShopPayment.find({...remaining})
                          .lean().countDocuments()
            //count of renderBage
            console.log('11')
            const lastRecord = null//ShopPayment.findOne({shopId}).sort({id:-1})
            //for add form
            console.log('12')
            if(id){
                remaining={...remaining,id:{$gte:1,$eq:id}}
            }
            else{
                remaining={...remaining,id:{$gte:1}}
            }
            //console.log('333333333')
            //console.log(remaining)
            console.log('13')
            const result= ShopPayment.find({...remaining}).lean()
                            .skip((pageNumber-1)*limitRow).limit(limitRow)
                            .select("-password")
                            .select("-code")
                            .select("-ownerPassword")
                            .select("-ownerCode")
                            .select("-recoveryPassword")
                            //.select("-shopId")
                            .sort(sort)
            //console.timeEnd('getlimit')
            let temp

            console.log('14')
            Promise.all([result, count,lastRecord]).then((results)=>{
                //console.log(results)
                temp={data:results[0],count:results[1],lastRecordId:null}
                res.status(200).json(temp)
            });
        
    }
    catch (error){
        return res.status(400).send({message:"getlimit fail"})
    }

}
//---------------------------------------------------
const updateshoppayment=async (req,res,next)=>{

    console.log('updateshoppayment')

    let ShopPayment
    let Shop

    if(process.env.AUTH_CONNECTION=="true"){
        ShopPayment=require('../modals/Auth').ShopPayment;
        Shop=require('../modals/Auth').Shop;

    }else{
        ShopPayment=require('../modals/ShopPayment')
        Shop=require('../modals/Shop')
    }  

    //const shopId=req.shopId
    const userId=req.user.id
    //const branchId=req.user.branchId

    const {_id,id,newId,username,password,shopName,code,shopId,
              ownerName,ownerPassword,detail,recoveryPassword,
              ...remaining}=req.body

    const {transferDate,accountName,accountNumber,transferAmount,
           fromBank,addMonth,
           newExpirationDate}=req.body

    let qryObject={id}

    try{
        console.log('1')
        //check user shop
        if(shopName||ownerName||username||password||ownerPassword||code||recoveryPassword){ 
            throw {message:"No username or password update allowed"}
        }

        if(!id&&id<1){ throw {message:"Invalid Id"}}
       
        if(!transferDate){ throw {message:"Invalid Transfer Date"}}
        if(!accountName){ throw {message:"Invalid Account Name"}}
        if(!accountNumber){ throw {message:"Invalid Account Number"}}
        if(!transferAmount){ throw {message:"Invalid Transfer Amount"}}
        if(!fromBank){ throw {message:"Invalid From Bank"}}
        if(!addMonth){ throw {message:"Invalid Add Month"}}
        if(!newExpirationDate){ throw {message:"Invalid New Expiration Date"}}

        //let dataTosave
     
        console.log('2')
        let dataTosave={...remaining,checkBy:userId,isCheck:true}
        
        //console.log('dataTosave')
        //console.log(dataTosave)

        //console.log('qryObject')
        //console.log(qryObject)        
        console.log('3')
        const resFindShopPayment=await ShopPayment.findOne({id:id})
        if(!resFindShopPayment){throw {message:'Invalid shop payment'}}

        console.log('4')
        const resFindShop=await Shop.findOne({shopName:shopId})
        if(!resFindShop){throw {message:'Invalid shop'}}


        console.log('5')
        if(resFindShopPayment.isCheck){

            console.log('6')
            await ShopPayment.updateOne(
                qryObject,
                {$set:{...dataTosave}}
            )
            let increaseAmount=transferAmount-addMonth*resFindShop.monthlyFee
            let prevIncreaseAmount=resFindShopPayment.transferAmount-resFindShopPayment.addMonth*resFindShop.monthlyFee
            
            console.log('7')
            console.log('prevIncreaseAmount')
            console.log(prevIncreaseAmount)

            console.log('increaseAmount')
            console.log(increaseAmount)

            await Shop.updateOne(
                {shopName:shopId},
                {$set:{
                    expirationDate:newExpirationDate,
                    tempExpirationDate:newExpirationDate,
                    remainingBalance:increaseAmount-prevIncreaseAmount+resFindShop.remainingBalance
                }}
            )
            return res.status(200).json({message:"update shoppayment succesfully"})
        }
        else{
            console.log('10')
            await ShopPayment.updateOne(
                qryObject,
                {$set:{...dataTosave}}
            )
            const increaseAmount=transferAmount-addMonth*resFindShop.monthlyFee

            console.log('12')
            console.log('increaseAmount')
            console.log(increaseAmount)

            await Shop.updateOne(
                {shopName:shopId},
                {$set:{
                    expirationDate:newExpirationDate,
                    tempExpirationDate:newExpirationDate,
                    remainingBalance:resFindShop.remainingBalance+increaseAmount
                }}
            )
            return res.status(200).json({message:"update shoppayment succesfully"})
        }       
    }
    catch (error){
        return res.status(400).send({message:"update shoppayment fail"})
    }

}

//-------------------------------------
const deleteshoppayment=async (req,res,next)=>{

    console.log('deleteshoppayment')


    if(process.env.AUTH_CONNECTION=="true"){
        ShopPayment=require('../modals/Auth').ShopPayment;
    }else{
        ShopPayment=require('../modals/ShopPayment')
    }  

    try{
     
        return res.status(200).json("deleteshoppayment success")   
    }
    catch (error){
        return res.status(400).send({message:"deleteshoppayment fail"})
    }

}







//---------------------------------------------------
const shoploginforpayment=async (req,res,next)=>{

    //console.log('shoploginforpayment')

    try {
        //-------------------
        //const {authConnection} = require('../modals/AuthConnection');
        let Data=require('../modals/Auth')    

        //--------------------

        const {shopName,password}=req.body

        if(!shopName){throw {message:"Invalid shopName"}}
        if(!password){throw {message:"Invalid password"}}
        //console.log(1)
        const resultFind=await Data.Shop.findOne({shopName}).lean()
        //console.log(2)
        if(!resultFind) {throw {message:'Invalid shop name'}}

        const {_id,code,active,monthlyFee,expirationDate}= resultFind
        if(!active){throw {message:'Inactive shop'}}
        //console.log(3)

        const isMatch=await bcrypt.compare(password,resultFind.password)
        if(!isMatch) {throw {message:'Invalid password'}}

        //console.log(4)
        const token =await jwt.sign( {id:shopName,code:code},
            process.env.JWT_SECRET,
            {expiresIn:'365d'} ) //36000

        //console.log(5)    
        const tempObj={
            shopName:shopName,
            expirationDate:expirationDate,
            monthlyFee:monthlyFee,
            token:token
        }
        //console.log(6)
        ////authConnection.close()                    
        return res.status(200).json(tempObj)   
    }
    catch(error){
        ////authConnection.close()
        return res.status(400).send(error);
    }
































}

const createshoppassword=async (req,res,next)=>{
    const Data=require(req.modal);
    const {recoveryPassword,shopName,password,
        //ownerPassword, 
    ...remainigkeys}=req.body;
    
    if(!shopName){throw {message:"Invalid shopName"}}
    if(!password){throw {message:"Invalid password"}}
    if(!recoveryPassword){throw {message:"Invalid recoveryPassword"}}

    const qryObject={shopName:shopName}

    try{

        const result=await Data.Shop.findOne({shopName}).lean()
        //console.log('result')
        //console.log(result)

        if(result.recoveryPassword!=recoveryPassword){
            throw {message:"Invalid Recovery Password"}
        }

        const hash_password = await bcrypt.hash(password,10)

        await Data.Shop.updateOne( {shopName:shopName},
                {$set:{ 
                    password:hash_password,
                    recoveryPassword:uuid.v4().substring(0,13),
                    code:uuid() 
                }
        } )

        return res.status(200).json({message:"create shop password successfully"})
    }
    catch (error){
        //console.log(error)
        //authConnection.close()
        return res.status(400).send(error);
    }
}

const resetshoppassword=async (req,res,next)=>{
    const Data=require(req.modal);

    let myheader={headers:{
                'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"//'application/json'
                 }}
    //console.log('resetshoppassword')
    //console.log('req.body')
    //console.log(req.body)
    const newRecoveryPassword=uuid.v4().substring(0,13)
    const secrete_key=process.env.SECRET_KEY
    await axios({
        method:'post',
        url:`https://www.google.com/recaptcha/api/siteverify`,
        params:{
            secret:secrete_key,
            response:req.body.token
        },
        myheader
    })
    .then(result=>{
        //console.log('result.........')
        //console.log(result.status)        
        //console.log('newRecoveryPassword')        
        //console.log(newRecoveryPassword)
        const promise1= Data.Shop.updateOne(
            {shopName:req.body.shopName},
            {recoveryPassword:newRecoveryPassword}
        )
        
        const promise2=Data.Shop.findOne({shopName:req.body.shopName})
        
        return Promise.all([promise1,promise2])
    })
    .then(results=>{
        //console.log('results.........')
        //console.log(results[1])
        const tempOwnerEmail=results[1].ownerEmail

        const smtpTransport = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            auth:{
                user:process.env.GMAIL_USER,
                pass:process.env.GMAIL_PASSWORD
            }
        })
    
        return smtpTransport.sendMail({
            form:process.env.GMAIL_USER,
            to: tempOwnerEmail,
            subject:'Support: Request for Recovery Password',
            text:"This recovery Password is for one time use",
            html:`<body><h5>Recovery Password</h5><h4>${newRecoveryPassword}</h4></body>`
        })
    })
    .then(sendResult=>{
        //console.log('sendResult....')
        //console.log(sendResult)
        return res.status(200).send({message:"reset shop password"})
    })
    .catch(error=>{
        return res.status(400).send({message:"reset shop password fail"})
    })

}



/*
axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    },
  );
*/
//======================
//===================
//post=>localhost:3001/*/pop
/*
const pop=async (req,res,next)=>{
    const Data=require(req.modal);
    const shopId=req.shopId

    const {items,template}=req.body;

    const eachLoop=10000;
    let start=0;
    let stop=0;
    //จำนวนเต็มรอบ
    let loopNumber=Math.floor(items/eachLoop)
    //เศษที่เหลือ เป็นรอบสุดท้าย
    const remainingNumber=items%eachLoop
    //=================
    
    //1) sample
    //2) sampleArray
    //3) createKey
    //4) createObject 
    //5) createArrayObject
    //6) loopPopDataPromiseAll // no use
    //7) saveToMonToMongoByEachLoop
        
    //=================
    //1) เลือกมาหนึ่งจาก array ที่ให้มา
    const sample=(array)=>{
        const tempIndex=Math.floor(Math.random() * array.length)
        return array[tempIndex]
    }
    //=================
    //2) สร้าง array ตามขนาดที่กำหนด โดยเลือกค่ามาจาก array ที่ให้มา 
    const sampleArray=(array,arraySize)=>{
        let tempArray=[]
        for(let i=1;i<=arraySize;i++){
            const tempIndex=Math.floor(Math.random() * array.length)
            tempArray=[...tempArray,array[tempIndex]]
        }
        return tempArray
    }
    //=================
    //3) createKey
    //template.i={key,type,array,arraySize,casual}
    //template.map(i=>{})
    const createKey=(newObj,i)=>{
        //สร้างเป็นตัวเลข ชื่อคือ key ด้วย 2 แบบ 
        //สุ่มค่าจาก array 
        //หรือใช้ casual ค่าระหว่าง 1-100
        if(i.type=="number"){
            if(i.array.length>0){
                newObj[i.key]=sample(i.array)  
                return newObj     
            }
            else{
                newObj[i.key]=casual.integer(0,i.casual)
                return newObj
            }
        }
        //สร้างเป็น boolean ค่าสุ่มระหว่าง true,false
        else if(i.type=="boolean"){
            newObj[i.key]=sample([true,false])
            return newObj
        }
        //สร้างเป็น date ค่าสุ่มจาก casual 
        else if(i.type=="date"){
            newObj[i.key]=new Date(casual.date('YYYY-MM-DD')).toISOString()
            return newObj
        }
        //สร้าง เป็น array ขนาด i.arraySize จากการสุ่มภายใน i.array 
        else if(i.type=="array"){
            if(i.array.length>0){
                newObj[i.key]=sampleArray(i.array,i.arraySize)       
                return newObj
            } 
        }     
        //สร้าง เป็น array ตัวเลข โดยกำหนด arraysize และ
        //จากการใช้ casual ระหว่าง 1-100
        else if(i.type=="arrayNumber"){
            newObj[i.key]=casual.array_of_integers(i.arraySize)
            return newObj 
        }
        //การสร้าง object ลูกขึ้นมา โดยมี subTemplate 
        //ไว้สร้าง ลูกอีกที โดยใช้คำสั่ง create Key ซ้ำ
        else if(i.type=="arrayObject"){
           newObj[i.key]={}
            i.subTemplate.map(k=>{
            newObj[i.key]={...newObj[i.key],...createKey(newObj[i.key],k) }
           })
           return newObj
           //console.log(newObj)
        }    
        //สร้าง key อื่นๆ จาก 1.ค่าใน array หรือ 2. จาก casual 
        else{
            if(i.array.length>0){
                newObj[i.key]=sample(i.array)       
                return newObj
            }
            else{
                newObj[i.key]=casual[i.casual]
                //console.log(casual[i.casual])
                return newObj
            }   
        }
    }
    //=================
    //4) createObject สร้าง 1 object จาก template 
    //โดยใช้ createKey สร้างแต่ละ ฟิ-์ 
    //สามารถสร้าง subTemplate ได้ด้วย
    const createObject=(template)=>{
        let tempObj={}
        for(let j =0;j<template.length;j++){
            tempObj={...tempObj,...createKey(tempObj,template[j]) }
        }       
        //console.log(tempObj)
        return tempObj
    }
    //=================
    //5) createArrayObject
    //คำสั่งในการ สุ่ม สร้าง array ของ object โดยมี id เริ่มจาก start จนถึง stop 
    //ด้วยคำสั่ง createObj โดยมีลักษณะ ข้อมูลตาม template
    //เราใช้ noe Promise เพื่อให้เป็น Async เพื่อใช้ promise all 
    //หรือกลับมาเป็น sync ด้วย await 
    const createArrayObject=(start,stop)=>{
        return new Promise((resolve,reject)=>{
            //console.log(`start=${start},stop=${stop}`)
            let temp=[]
            
            for(let i=start;i<=stop;i++){
                temp=[...temp,{id:i,...createObject(template)}]
            }
 
            resolve(temp)
        })    
    }        
    //=================
    //=================
    //7 loopPopDataFor
    //for + await => จะดำเนินการแบบทีละ ลูป (แต่ละลูป แค่า 10,000 แรมจำกัด ) แล้วทำต่อไป
    //คำสั่ง ในการ เรียกใช้ popData แล้วบันทึก ใน mongo ในทีละรอบ
    const saveToMongoByEachLoop= async()=>{

        //เริ่มจับเวลา
        console.time('saveToMongoByEachLoop')
        
        try{        
            for (let i=0;i<loopNumber;i++){
                start=i*eachLoop+1
                stop =i*eachLoop+eachLoop
                
                const temp=await createArrayObject(start,stop)
                const result=await Data.create(temp)
                if(result)
                {
                  //console.log(`start:${start},stop:${stop},length:${result.length}`)
                }
            }

            if(remainingNumber>0){
                start=stop+1
                stop=stop+remainingNumber
                
                const temp=await createArrayObject(start,stop)
                const result=await Data.create(temp)
                if(result)
                {
                  //console.log(`start:${start},stop:${stop},length:${result.length}`)
                }
            }
            //สิ้นสุดเวลา
            console.timeEnd('saveToMongoByEachLoop')
            return true
        }
        catch (error){
            return false
        }
    }
    //==================
    //console.log(createObject(template))
    //if(true){
    if(saveToMongoByEachLoop()){
        return (
            res.status(200).json({message:"ok"})
        )
    }
    else {
        return(
            res.status(400).send({message:"fail"})
        )
    }
}
*/
//===================

const developer={
    mytest,
    init,restore,backup,
    getcustom,getlimit,
    deleteall,deletecustom,deletetransaction,deletegroup,deletemany,
    addcustom,addtransaction,addgroup,
    updatecustom,updatetabletemplate,
    updatetransaction,updatetransactionstatus,
    updategroup,

    updateformtemplate,
    payshopfee,getshoppayment,updateshoppayment,deleteshoppayment,
    shoploginforpayment,
    resetshoppassword,createshoppassword
}

module.exports = developer;