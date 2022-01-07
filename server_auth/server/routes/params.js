const validationTemplate =require('../middleware/validation/validationTemplate')
const initData = require('../data/initData/initData')
//const restoreData = require('../data/restoreData/restoreData')

const backupFolder='./data/backupData/'

const shop={
    modal:'../modals/Auth',
    initData:initData.shopInit,
    //restoreData:restoreData.shopRestore,
    backupFolder:backupFolder,
    //addLimit:5,
    tokenName:"shopToken",
    routeName:"shop",
    folder:"upload/shop",
    valTemplate:validationTemplate.shop
}
const user={
    modal:'../modals/Auth',
    initData:initData.userInit,
    //restoreData:restoreData.userRestore,
    backupFolder:backupFolder,
    //addLimit:5,
    tokenName:"userToken",
    routeName:"user",
    folder:"upload/user",
    valTemplate:validationTemplate.user
}

const shoppayment={
    modal:'../modals/Auth',
    initData:initData.shoppaymentInit,
    //restoreData:restoreData.userRestore,
    backupFolder:backupFolder,
    //addLimit:5,
    tokenName:"",
    routeName:"shoppayment",
    folder:"p35upload/shoppayment",
    valTemplate:validationTemplate.shoppayment
}


const params={shop,user,shoppayment}

module.exports=params