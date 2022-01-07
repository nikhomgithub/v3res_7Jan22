const tableTemplate=require('./tableTemplate')
const formTemplate=require('./formTemplate')

const uuid = require("uuid");

//==============================
//==============================
const toDate=new Date("2022-01-01T00:00:00.000Z").toISOString()

const shopInit={
    shopName:"shopa",
    password:"shopa",
    active:true,
    code: uuid.v4(),
    //code:uuid.v4(),
    dateIn:toDate,
    
    ownerName:"ownera",
    ownerSurname:"...",
    ownerPassword:"",

    //ownerPassword:"ownera",
    //ownerActive:true,
    //ownerCode:uuid.v4(),

    ownerEmail:'mr3nikom@gmail.com',
    recoveryPassword:uuid.v4(),

    expirationDate:toDate,
    tempExpirationDate:toDate,


    monthlyFee:200,
    remainingBalance:0,
    photoUrl1:[]
}
//-----------------------------
const userInit={
    id:1,
    username:"userone",
    password:"userone",
    code: uuid.v4(),
    active:true,
    //code:uuid.v4(),
    userLevel:"admin",
    dateIn:toDate,
    name:"Peter",
    surname:"Goodman",
    //branchName:"main",
    //branchId:1,
    shopId:"shopa"
}
//-----------------------------

const shoppaymentInit={
    id:0,
    userId:"",
    shopId:"shopa",
    timestamp:toDate,

    photoUrl1:[], // 
    
    transferDate:toDate,
    accountName:"Peter",
    accountNumber:"111-111",
    transferAmount:100,
    fromBank:"SCB",
    isCheck:false,
    hasProblem:false,
    checkBy:"Jane",
    remainingBalance:100,
    addMonth:3,

    expirationDate:toDate,
    newExpirationDate:toDate


}

//--------------------------------------
const branchInit=[
    {
        id:1,
        branchName:"main",
        photoUrl1:[""],
        shopInfo:
            ["อร่อยบาร์",
             "123/456 บางช้าง บางเขน กทม",
            ],
        defaultCustomerId:1,
        languageSetting:"Thai",
        printPageSetting:"58mm",
        widthLeft:30,
        limitRow:10,
        table:[
            {tableName:"T1",tableActive:true},
            {tableName:"T2",tableActive:true},
            {tableName:"T3",tableActive:true},
            {tableName:"T4",tableActive:true},
            {tableName:"T5",tableActive:true},
            {tableName:"T6",tableActive:true},
            {tableName:"T7",tableActive:true},
            {tableName:"T8",tableActive:true},
            {tableName:"T9",tableActive:true},
            {tableName:"T10",tableActive:true},
            {tableName:"T11",tableActive:true},
            {tableName:"T12",tableActive:true},
            {tableName:"T13",tableActive:true},
            {tableName:"T14",tableActive:true},
            {tableName:"T15",tableActive:true},
            {tableName:"T16",tableActive:true},
            {tableName:"T17",tableActive:true},
            {tableName:"T18",tableActive:true},
            {tableName:"T19",tableActive:true},
            {tableName:"T20",tableActive:true},
        ],
        shopId:"shopa",
        userId:"1"
    },

    {
        id:2,
        branchName:"second",
        photoUrl1:["https://picsum.photos/id/7/300/200"],
        shopInfo:["อร่อยบาร์",
                    "123 บางแสน บางโฉลก ลาดยาว กทม",
                    "1234 4567",
                    "สาขาสอง",
                    "รามคำแหง"
                ],
        defaultCustomerId:1,
        languageSetting:"English",
        printPageSetting:"58mm",
        widthLeft:30,
        
        table:[
            {tableName:"T1",tableActive:true},
            {tableName:"T2",tableActive:true},
            {tableName:"T3",tableActive:true},
            {tableName:"T4",tableActive:true},
            {tableName:"T5",tableActive:true},
            {tableName:"T6",tableActive:true},
            {tableName:"T7",tableActive:true},
            {tableName:"T8",tableActive:true},
            {tableName:"T9",tableActive:true},
            {tableName:"T10",tableActive:true},
            {tableName:"T11",tableActive:true},
            {tableName:"T12",tableActive:true},
            {tableName:"T13",tableActive:true},
            {tableName:"T14",tableActive:true},
            {tableName:"T15",tableActive:true},
            {tableName:"T16",tableActive:true},
            {tableName:"T17",tableActive:true},
            {tableName:"T18",tableActive:true},
            {tableName:"T19",tableActive:true},
            {tableName:"T20",tableActive:true},
        ],
        shopId:"shopa",
        userId:"1"
    }
]

//--------------------------------------
const basicDataInit={

    id:1,
    shopId:"shopa",
    title:["นาย","นาง","นางสาว"],
    unit:["อัน","จาน","แก้ว","กิโลกรัม"],
    userLevel:["admin","supervisor","staff"],
    //transactionType:["ซื้อ","ขาย","จอง"],
    //transactionStatus:["เสร็จ","ไม่เสร็จ"],
    branch:[
        {branchId:1,branchName:"main"},
    ],
    transactionGroupType:["ขายออก","ซื้อเข้า","อื่นๆ"],
    transactionStatus:["open","close"],

    jobStatus:["open","close"],
    queueStatus:["open","close"],
    tableStatus:["open","close"],

    partnerType:["ประจำ","vip"],

    //language:["Thai","Eng"],

    paymentType:["สด","เครดิต"],

    effectCustomerPoint:["+","-","unChange"],
    effectSpending:["+","-","unChange"],
    effectStock:["+","-","unChange"],

    position:["left","right","center"],

    transaction:[
        {
        transactionType:"บิลขาย",
        effectCustomerPoint:"+",
        effectSpending:"+",
        effectStock:"-",
        },
        {
        transactionType:"ใบเสนอราคา",
        effectCustomerPoint:"unchange",
        effectSpending:"unchange",
        effectStock:"unchange",
        },
        {
        transactionType:"ใบจอง",
        effectCustomerPoint:"+",
        effectSpending:"unchange",
        effectStock:"unchange",
        },
    ],

    tax:[{
        taxName:"vat",
        taxActive:true,
        taxRate:7,
        taxInPercentage:true
        },
    ],

    reduction:[{
        reductionName:"หักแต้ม",
        reductionActive:true,
        reductionRate:100,
        reductionInPercentage:false
        }
    ],
    //partnerType:["ผู้ซื้อ","ผู้ขาย"],

    printPage:[
    
    {   printId:1,
        printPageName:"58mm",
        widthUnit:"%",
        fontUnit:"rem",
        totalWidth:83,
        showTableHead:true,
        header1:[
              {printLb:"",printValue:"Sister Steak",printFontSize:"1",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"126 รามคำแหง24,บางกะปิ,",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"กรุงเทพมหานคร 10240",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"โทรศัพท์:0882224577",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"TAX ID:1101499065873",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
        ],
        header2:[
              {printLb:"",printFieldName:"date",printFontSize:"1",printWidth:"100",printPosition:"left"},
              {printLb:"",printFieldName:"transactionType",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"id",printFontSize:"1",printWidth:"33",printPosition:"right"},
              {printLb:"",printFieldName:"partnerId",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"name",printFontSize:"1",printWidth:"33",printPosition:"right"},
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
        ],
        table1:[
              {printLb:"Product",printFieldName:"productName",printFontSize:"1",printWidth:"33",printPosition:"left"},
              {printLb:"Qty",printFieldName:"quantity",printFontSize:"1",printWidth:"33",printPosition:"left"},
              {printLb:"Total",printFieldName:"result",printFontSize:"1",printWidth:"33",printPosition:"left"},
        ],
        footer1:[
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
              {printLb:"",printValue:"total",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"total",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"-",printFieldName:"tax",printFontSize:"1",printWidth:"68",printPosition:"right"},
              
              {printLb:"",printValue:"totalTax",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"totalTax",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"-",printFieldName:"reduction",printFontSize:"1",printWidth:"68",printPosition:"right"},
  
              {printLb:"",printValue:"totalReduction",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"totalReduction",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"",printValue:"grandTotal",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"grandTotal",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
        ],
        footer2:[
              {printLb:"",printValue:"----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"รหัส Wifi:zzzzzzz",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"Thank you",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
        ]
    },

    {   printId:2,
        printPageName:"68mm",
        widthUnit:"%",
        fontUnit:"rem",
        totalWidth:83,
        showTableHead:true,
        header1:[
              {printLb:"",printValue:"Sister Steak",printFontSize:"1",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"126 รามคำแหง24,บางกะปิ,",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"กรุงเทพมหานคร 10240",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"โทรศัพท์:0882224577",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"TAX ID:1101499065873",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
        ],
        header2:[
              {printLb:"",printFieldName:"date",printFontSize:"1",printWidth:"100",printPosition:"left"},
              {printLb:"",printFieldName:"transactionType",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"id",printFontSize:"1",printWidth:"33",printPosition:"right"},
              {printLb:"",printFieldName:"partnerId",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"name",printFontSize:"1",printWidth:"33",printPosition:"right"},
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
        ],
        table1:[
              {printLb:"Product",printFieldName:"productName",printFontSize:"1",printWidth:"33",printPosition:"left"},
              {printLb:"Qty",printFieldName:"quantity",printFontSize:"1",printWidth:"33",printPosition:"left"},
              {printLb:"Total",printFieldName:"result",printFontSize:"1",printWidth:"33",printPosition:"left"},
        ],
        footer1:[
              {printLb:"",printValue:"-----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
  
              {printLb:"",printValue:"total",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"total",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"-",printFieldName:"tax",printFontSize:"1",printWidth:"68",printPosition:"right"},
              
              {printLb:"",printValue:"totalTax",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"totalTax",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"-",printFieldName:"reduction",printFontSize:"1",printWidth:"68",printPosition:"right"},
  
              {printLb:"",printValue:"totalReduction",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"totalReduction",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
              {printLb:"",printValue:"grandTotal",printFontSize:"1",printWidth:"66",printPosition:"left"},
              {printLb:"",printFieldName:"grandTotal",printFontSize:"1",printWidth:"33",printPosition:"left"},
  
        ],
        footer2:[
              {printLb:"",printValue:"----------------------------",printFontSize:"1.2",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"รหัส Wifi:zzzzzzz",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
              {printLb:"",printValue:"Thank you",printFontSize:"0.8",printWidth:"100",printPosition:"center"},
        ]
    },


    ],  

    routeAuth:[
     
     {id:1,routeAddress:'/user/adduser', routeName:"N/A", userLevel:["admin"]},
     {id:2,routeAddress:'/user/updateuser', routeName:"N/A", userLevel:["admin"]},
     {id:4,routeAddress:'/user/getuser', routeName:"N/A", userLevel:["admin"]},
     {id:5,routeAddress:'/user/deleteuser', routeName:"N/A", userLevel:["admin"]},
     {id:6,routeAddress:'/user/changeuserpassword', routeName:"N/A", userLevel:["admin"]},
     {id:4,routeAddress:'/user/getuserbyid', routeName:"N/A", userLevel:["admin","supervisor","staff"]},

     {id:8,routeAddress:'/group/getcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:9,routeAddress:'/group/deletegroup', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:10,routeAddress:'/group/addcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:11,routeAddress:'/group/updategroup', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:12,routeAddress:'/group/deletemany', routeName:"N/A", userLevel:["admin","supervisor","staff"]},

     {id:26,routeAddress:'/partner/getlimit', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:27,routeAddress:'/partner/deletecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:28,routeAddress:'/partner/addcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:29,routeAddress:'/partner/updatecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:30,routeAddress:'/partner/deletemany', routeName:"N/A", userLevel:["admin","supervisor","staff"]},

     {id:33,routeAddress:'/transaction/getlimit', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:34,routeAddress:'/transaction/deletetransaction', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:35,routeAddress:'/transaction/addtransaction', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:36,routeAddress:'/transaction/updatetransaction', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:37,routeAddress:'/transaction/deletemany', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:38,routeAddress:'/transaction/updatecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},

     {id:45,routeAddress:'/basicdata/getcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:46,routeAddress:'/basicdata/deletecustom', routeName:"N/A", userLevel:["admin"]},
     {id:47,routeAddress:'/basicdata/addcustom', routeName:"N/A", userLevel:["admin"]},
     {id:48,routeAddress:'/basicdata/updatecustom', routeName:"N/A", userLevel:["admin"]},

     {id:52,routeAddress:'/product/getlimit', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:53,routeAddress:'/product/deletecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:54,routeAddress:'/product/addcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:55,routeAddress:'/product/updatecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:56,routeAddress:'/product/deletemany', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
   
     {id:58,routeAddress:'/tabletemplate/getcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:59,routeAddress:'/tabletemplate/updatetabletemplate', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
        
     {id:68,routeAddress:'/formtemplate/getcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:69,routeAddress:'/formtemplate/updateformtemplate', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:70,routeAddress:'/formtemplate/updatecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:71,routeAddress:'/formtemplate/addcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:72,routeAddress:'/formtemplate/deletecustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},


     {id:75,routeAddress:'/branch/getcustom', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:76,routeAddress:'/branch/deletecustom', routeName:"N/A", userLevel:["admin","supervisor"]},
     {id:77,routeAddress:'/branch/addcustom', routeName:"N/A", userLevel:["admin","supervisor"]},
     {id:78,routeAddress:'/branch/updatecustom', routeName:"N/A", userLevel:["admin","supervisor"]},

     {id:79,routeAddress:'/shoppayment/getshoppayment', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:80,routeAddress:'/shoppayment/updateshoppayment', routeName:"N/A", userLevel:["admin","supervisor","staff"]},
     {id:81,routeAddress:'/shoppayment/deleteshoppayment', routeName:"N/A", userLevel:["admin"]},

    ]
}
const tempProduct={
      
    photoUrl1:[""], 
    unit:"อัน",
    price:100,
    priceLevel:[{price:50,remark:"ทุน"}],
    remark:"ของแท้",
    active:true,
    point:1,
    timestamp:new Date().toISOString(),
    userId:1,
    shopId:"shopa",
    isRawMat:false,  
    hasDetailProduct:false,

    stock:0,
    plan:0,
    order:0,
    point:1,
    detail:[]
}

//------------------------------------
/*
const tempDetail1=[
{...tempProduct,id:1,barcode:1,groupId:1, groupName: 'ชิพ',productName:"ชิพ 8000",isRawMat:true,quantity:1,result:100},
{...tempProduct,id:23,barcode:23,groupId:202000000000000, groupName: 'คาปา',productName:"C 10F",isRawMat:true,quantity:1,result:100},
{...tempProduct,id:25,barcode:24,groupId:203000000000000, groupName: 'ตัวต้านทาน',productName:"R-1000",isRawMat:true,quantity:1,result:100}
]

const tempDetail2=[
{...tempProduct,id:22,barcode:22,groupId:201000000000000, groupName: 'ชิพ',productName:"ชิพ 9000",isRawMat:true,quantity:2,result:200},
{...tempProduct,id:24,barcode:24,groupId:202000000000000, groupName: 'คาปา',productName:"C 500F",isRawMat:true,quantity:2,result:200},
{...tempProduct,id:26,barcode:26,groupId:203000000000000, groupName: 'ตัวต้านทาน',productName:"R-8888",isRawMat:true,quantity:2,result:200},
]
*/
//------------------------------------
const coffeebean={
    id:4,barcode:4,groupId:3, groupName: 'วัตถุดิบ',productName:"เมล็ดกาแฟ",//2
    unit:"กิโลกรัม",price:"300",quantity:0.2,result:60,
    remark:"",isRawMat:true
    //detail:tempDetail1
}
const noodle={
    id:3,barcode:3,groupId:3, groupName: 'วัตถุดิบ',productName:"เส้นใหญ่",//2
    unit:"กิโลกรัม",price:"50",quantity:0.2,result:10,
    remark:"",isRawMat:true
    //detail:tempDetail1
}

const productInit=
[

{...tempProduct,id:1,barcode:1,groupId:2, groupName:'อาหาร',productName:"ผัดซิอิ้ว",//0
    unit:"จาน",price:"50",point:1,
    detail:[noodle]
},
{...tempProduct,id:2,barcode:2,groupId:2, groupName:'อาหาร',productName:"คาปู",//1
    unit:"แก้ว",price:"60",point:1,
    detail:[coffeebean]
},
{...tempProduct,id:3,barcode:3,groupId:3, groupName: 'วัตถุดิบ',productName:"เส้นใหญ่",//2
    unit:"กิโลกรัม",price:"50",point:0,isRawMat:true,
    //detail:tempDetail1
},
{...tempProduct,id:4,barcode:4,groupId:3, groupName: 'วัตถุดิบ',productName:"เมล็ดกาแฟ",//2
    unit:"กิโลกรัม",price:"300",point:0,isRawMat:true
},
/*
{...tempProduct,id:4,barcode:4,groupId:2, groupName: 'TV',productName:"LG HD1",//3
    //detail:tempDetail2
},
{...tempProduct,id:5,barcode:5,groupId:2, groupName: 'TV',productName:"LG Ultra",//4
    //detail:tempDetail1
},
{...tempProduct,id:6,barcode:6,groupId:2, groupName: 'TV',productName:"LG LED",//5
    detail:tempDetail2
},

{...tempProduct,id:7,barcode:7,groupId:3, groupName: 'mobile',productName:"SS 1",//6
},
{...tempProduct,id:8,barcode:8,groupId:3, groupName: 'mobile',productName:"SS 2",//7
},

{...tempProduct,id:9,barcode:9,groupId:3, groupName: 'mobile',productName:"Oppo 1",//8
},
{...tempProduct,id:10,barcode:10,groupId:3, groupName: 'mobile',productName:"Oppo 2",//9
},

{...tempProduct,id:11,barcode:11,groupId:9, groupName: 'board',productName:"Nano",//10
},
{...tempProduct,id:12,barcode:12,groupId:9, groupName: 'board',productName:"Uno",//11
},

{...tempProduct,id:13,barcode:13,groupId:9, groupName: 'board',productName:"PI 1",//12
},
{...tempProduct,id:14,barcode:14,groupId:9, groupName: 'board',productName:"PI 2",//13
},

{...tempProduct,id:21,barcode:21,groupId:8, groupName: 'วัตถุดิบ',productName:"ชิพ 8000",isRawMat:true,//14
},
{...tempProduct,id:22,barcode:22,groupId:8, groupName: 'วัตถุดิบ',productName:"ชิพ 9000",isRawMat:true,//15
},

{...tempProduct,id:23,barcode:23,groupId:8, groupName: 'วัตถุดิบ',productName:"C 10F",isRawMat:true,//16
},
{...tempProduct,id:24,barcode:24,groupId:8, groupName: 'วัตถุดิบ',productName:"C 500F",isRawMat:true,//17
},
{...tempProduct,id:25,barcode:25,groupId:8, groupName: 'วัตถุดิบ',productName:"R-1000",isRawMat:true,//18
},
{...tempProduct,id:26,barcode:26,groupId:8, groupName: 'ตัวต้านทาน',productName:"R-8888",isRawMat:true,//19
},
*/
]
//-------------------------------------
/*
const groupInit=
[         //12345678901234 
    {gcode: 100000000000000, level: 1,id: 100000000000000, groupName: 'Group1',shopId:"shopa",userId:"1"},
    //{gcode: 101000000000000, level: 2,id: 101000000000000, groupName: 'ทีวี',shopId:"shopa",userId:"1"},
    //{gcode: 101010000000000, level: 3,id: 101010000000000, groupName: 'ทีวี Sony',shopId:"shopa",userId:"1"},
    //{gcode: 101020000000000, level: 3,id: 101020000000000, groupName: 'ทีวี LG',shopId:"shopa",userId:"1"},

    //{gcode: 102000000000000, level: 2,id: 102000000000000, groupName: 'มือถือ',shopId:"shopa",userId:"1"},
    //{gcode: 102010000000000, level: 3,id: 102010000000000, groupName: 'มือถือ SS',shopId:"shopa",userId:"1"},
    //{gcode: 102020000000000, level: 3,id: 102020000000000, groupName: 'มือถือ Oppo',shopId:"shopa",userId:"1"},
    //{gcode: 200000000000000, level: 1,id: 200000000000000, groupName: 'Raw Mat',shopId:"shopa",userId:"1"},
    //{gcode: 201000000000000, level: 2,id: 201000000000000, groupName: 'ชิพ',shopId:"shopa",userId:"1"},
    //{gcode: 202000000000000, level: 2,id: 202000000000000, groupName: 'คาปา',shopId:"shopa",userId:"1"},
    //{gcode: 203000000000000, level: 2,id: 203000000000000, groupName: 'ตัวต้านทาน',shopId:"shopa",userId:"1"}
 ]
 */

const groupInit=[
    {id:1,groupName:"main",gcode:"main",level:1,shopId:"shopa"},
    {id:2,groupName:"อาหาร",gcode:"main/อาหาร",level:2,shopId:"shopa"},
    {id:3,groupName:"วัตถุดิบ",gcode:"main/วัตถุดิบ",level:2,shopId:"shopa"},

]
// ------------------------------------
//-------------------------------------
const tempPartner={
    id:1,
    title:"นาย",
    name:"จิตติ",
    phone:["12345","67890"],
    partnerType:"ผู้ซื้อ",

    //partnerype:"ปกติ",
    address:["12 ต.หมี่แดง อ.เวียงพิง จ.เชียงของ 12345",
             "55 ต.เขียว อ.รุ้งสวย จ.มะขาม 11122"
            ],
    photoUrl1:[""],     
    active:true,
    remark:"ของแท้",
    shopId:"shopa",
    userId:"1",
    remainingCustomerPoint:0,
    totalSpending:0,
}

const partnerInit=[
    {...tempPartner,id:1,name:"Jany",totalPoint:0},
    {...tempPartner,id:2,name:"Feby",totalPoint:0},
    {...tempPartner,id:3,name:"Marchy",totalPoint:0},
    //{...tempPartner,id:4,name:"Appry",totalPoint:5},
    //{...tempPartner,id:5,name:"Mayie",totalPoint:20},
    //{...tempPartner,id:6,name:"Junny",totalPoint:20},
    //{...tempPartner,id:7,name:"Jully",totalPoint:20},
    //{...tempPartner,id:8,name:"Augy"},
    //{...tempPartner,id:9,name:"Septy"},
    //{...tempPartner,id:10,name:"Octy"},
    //{...tempPartner,id:11,name:"Novy"},
]

//-----------------------------------

//-------------------------------
const tempTransaction={

    id:0,
    date:new Date().toISOString(),
    remindDate:new Date().toISOString(),
    //branchName:"main",
    //branchId:1,
    //transactionName:"tname",
    transactionType:"บิลขาย",
    //transactionCode:"BR",
    //transactionGroupType:"ขาย",
    transactionStatus:"open",
    //reference:"",
    active:true,
    //transactionType:"งานซ่อม",
    //status:"open",
    
    table:"T1",
    tableStatus:"open",

    queue:1,
    queueStatus:"open",

    paymentType:"เงินสด",
    

    effectStock:"-",
    effectSpending:"unChange",
    effectCustomerPoint:"unChange",

    //photoUrl1:[""],

    partnerId:1,
    partnerType:"ผู้ซื้อ",

    title:"นาย",
    name:"จิตติ",
    phone:["0924424349 ","0459213311"],

    address: "",

    remark:"ของแท้",
    
    total:0,
    //reduction:20,
    
    totalReduction:0,

    reduction:[],

    grandTotal:0,

    totalTax:0,
    tax:[],

    totalPoint:0,
    reductCustomerPoint:0,

    shopId:"shopa",
    userId:"1",

    detail:[]
    
}

const transactionInit=[
{...tempTransaction}
/*
{...tempTransaction,id:1,shopId:"shopa",branchId:null,branchName:"",active:false},

{...tempTransaction,shopId:"shopa",branchId:"1",branchName:"main",name:"Peter",total:500},
{...tempTransaction,shopId:"shopa",branchId:"1",branchName:"main",name:"Peter",total:100},

{...tempTransaction,shopId:"shopa",branchId:"2",branchName:"second",name:"John",total:200},
{...tempTransaction,shopId:"shopa",branchId:"2",branchName:"second",name:"Peter",total:500},
{...tempTransaction,shopId:"shopa",branchId:"2",branchName:"second",name:"Peter",total:200},

{...tempTransaction,shopId:"shopb",branchId:"1",branchName:"main",name:"John",total:100},
{...tempTransaction,shopId:"shopb",branchId:"1",branchName:"main",name:"Peter",total:300},
{...tempTransaction,shopId:"shopb",branchId:"1",branchName:"main",name:"Peter",total:400},

{...tempTransaction,shopId:"shopb",branchId:"2",branchName:"second",name:"John",total:100},
{...tempTransaction,shopId:"shopb",branchId:"2",branchName:"second",name:"Peter",total:300},
{...tempTransaction,shopId:"shopb",branchId:"2",branchName:"second",name:"Peter",total:400},
*/
]
//--------------------------------------

//-----------------------------------------

//-----------------------------------------
const stickerInit={
    id:1,
    recordName:"abcd",
    date:new Date().toISOString(),
    thaiDate:"",
    recordBy:"Peter",

    xPerLine:4,
    heightP:297,
    widthP:210,

    gridColumnGap:2,
    gridRowGap:2,
    showBorder:true,

    paddingTopP:5,
    paddingBottomP:5,
    paddingLeftP:5,
    paddingRightP:5,

    showCode:true,
    showBarCode:true,

    heightB:20,
    widthB:1,
    fontSizeCode:10,

    showName:true,
    fontSizeName:10,

    showPrice:true,
    fontSizePrice:10,
    
    showUnit:true,
    fontSizeUnit:10,

    productData : [
        {code:"1234",name:"coloa",price:100,unit:"ขวด",qty:10},
        {code:"4aa5",name:"pepsi",price:200,unit:"ขวด",qty:5},
    ]

}

//-----------------------------------------
const initMasterData= {
                    userInit,
                    shoppaymentInit,
                    basicDataInit,branchInit,
                    tableTemplate,
                    productInit,groupInit,
                    partnerInit,
                    transactionInit,
                    stickerInit,formTemplate
                }

module.exports = initMasterData;

