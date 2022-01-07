const jwt = require('jsonwebtoken');

const checkShopToken = ()=>{

    
    return async (req,res,next)=>{
     
        try {

            console.log('checkShopToken........')

            let Shop    
            if(process.env.AUTH_CONNECTION=="true"){
                Shop=require('../modals/Auth').Shop;
            }else{
                Shop=require('../modals/Shop')
            }  

            //console.log(req.headers)
            if(!req.headers.shopauthorization){
                throw {message:`Unauthorized-shop1`}
            }
            const shopToken = req.headers.shopauthorization.split(" ")[1];

            if(!shopToken){
                throw {message:`Unauthorized-shop2`}
            }
            
            const shopDecoded = jwt.verify(shopToken, process.env.JWT_SECRET);

            console.log('shopDecoded===========')
            console.log(shopDecoded)

            const shopResult=await Shop.findOne({shopName:shopDecoded.id,
                                                code:shopDecoded.code,
                                                }) 
            //authConnection.close()
            //console.log('shopResult.........')
            //console.log(shopResult)

            //console.log(new Date(shopResult.expirationDate))
            
            if(!shopResult){throw {message:`Unauthorized-shop3`}}
            if(!shopResult.active){throw {message:"Unauthorized-shop4"}} 
            
            //authConnection.close()
            //const {_id}=shopResults
            

            const expirationDate=new Date(shopResult.expirationDate)
            const tempExpirationDate=new Date(shopResult.tempExpirationDate)

            //console.log('shopResult')
            //console.log(shopResult)

            //console.log('expirationDate')
            //console.log(expirationDate)
            
            let today=new Date()
            
            //console.log('today')
            //console.log(today)

            //console.log('tempExpirationDate')
            //console.log(tempExpirationDate)
        
            req.shopId=shopDecoded.id
            //console.log(req)
            //console.log(req.body)
            //console.log('end shopToken')

            if( req.routeAddress=="/shoppayment/getshoppayment"||
                req.routeAddress=="/shoppayment/updateshoppayment"){

                   
                    if(shopDecoded.id=="shopmaster"){
                        shopDecoded.id
                        req.shop=shopResult._doc
                        return next()
                    }
                    else{
                        throw {message:"Unauthorized-shop5"}
                    }
                    
                    
            }

            else if(today>expirationDate){

                    //console.log('req.routeAddress................')
                    //console.log(req.routeAddress)
                    
                    if(req.routeAddress=="/shoppayment/payshopfee"
                      
                    ){
                        //console.log('---1')
                        req.shop=shopResult._doc
                        return next()
                    }
                    else {
                        //console.log('---2')

                        const temp3=new Date(expirationDate.toISOString()) 
                        temp3.setDate(temp3.getDate()+3)
                        const expirationDateLimit=temp3

                        if(today>expirationDateLimit){
                            //console.log('---3')

                            throw {message:`Your service is expired`}
                        }
                        else{
                            if(today>tempExpirationDate){
                                //console.log('---4.....')

                                    const temp4=new Date(tempExpirationDate.toISOString())

                                    const temp=new Date(
                                        temp4.setMinutes(
                                            temp4.getMinutes()+30
                                        )
                                    ).toISOString()
                                        
                                    //console.log('temp')
                                    //console.log(temp)
                                    
                                    await Shop.updateOne(
                                        {shopName:shopDecoded.id},
                                        {tempExpirationDate:temp}
                                    )
                                
                                throw {message:`Your service is expired`}
                            }
                            else{
                                //console.log('---5......')
                                
                                return next()
                            }
                        }
                    }
            }
            else{
                //console.log('---300')
                return next()
            }


          
        } catch (error) {
            //console.log(`error : ${error}`)
            //authConnection.close()
            return res.status(400).send(error);
            //return res.json({ message:`Unauth`});
        }
               
    }
}

module.exports = checkShopToken