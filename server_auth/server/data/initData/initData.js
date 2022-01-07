const tableTemplate=require('./tableTemplate')
const uuid = require("uuid");

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




const initData= {
                    shopInit,userInit,shoppaymentInit
                }

module.exports = initData;