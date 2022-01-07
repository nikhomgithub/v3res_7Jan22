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
    folder:"p35upload/shop",
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
    folder:"p35upload/user",
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



const basicData={
    modal:'../modals/BasicData',
    initData:initData.basicDataInit,
    //restoreData:restoreData.basicDataRestore,
    backupFolder:backupFolder,
    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"basicdata",
    folder:"p35upload/basicdata",
    valTemplate:validationTemplate.basicData
}

const branch={
    modal:'../modals/Branch',
    initData:initData.branchInit,
    //restoreData:restoreData.basicDataRestore,
    backupFolder:backupFolder,
    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"branch",
    folder:"p35upload/branch",
    valTemplate:validationTemplate.branch
}

const tableTemplate={
    modal:'../modals/TableTemplate',
    initData:initData.tableTemplate,
    //restoreData:restoreData.tableTemplateRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"tabletemplate",
    folder:"p35upload/tabletemplate",
    valTemplate:null
}
const product={
    modal:'../modals/Product',
    initData:initData.productInit,
    //restoreData:restoreData.productRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"product",
    folder:"p35upload/product",
    valTemplate:validationTemplate.product
}
const group={
    modal:'../modals/Group',
    initData:initData.groupInit,
    //restoreData:restoreData.groupRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"group",
    folder:"p35upload/group",
    valTemplate:validationTemplate.group
}
const partner={
    modal:'../modals/Partner',
    initData:initData.partnerInit,
    //restoreData:restoreData.partnerRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"partner",
    folder:"p35upload/partner",
    valTemplate:validationTemplate.partner
}

const transaction={
    modal:'../modals/Transaction',
    initData:initData.transactionInit,
    //restoreData:restoreData.transactionRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"transaction",
    folder:"p35upload/transaction",
    valTemplate:validationTemplate.transaction
}

const transactionLog={
    modal:'../modals/TransactionLog',
    initData:initData.transactionLogInit,
    //restoreData:restoreData.transactionLogRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"transactionlog",
    folder:"p35upload/transactionlog",
    valTemplate:null
}

const sticker={
    modal:'../modals/Sticker',
    initData:initData.stickerInit,
    //restoreData:restoreData.partnerRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"sticker",
    folder:"p35upload/sticker",
    valTemplate:validationTemplate.customer
}
const formTemplate={
    modal:'../modals/FormTemplate',
    initData:initData.formTemplate,
    //restoreData:restoreData.tableTemplateRestore,
    backupFolder:backupFolder,

    //dateIn: "2012-10-10"
    //addLimit:5,
    tokenName:"",
    routeName:"formtemplate",
    folder:"p35upload/formtemplate",
    valTemplate:null
}



const params={shop,user,
              shoppayment,
             basicData,branch,
             tableTemplate,
             product,group,partner,
             transaction,transactionLog,
             sticker,formTemplate            
            }

module.exports=params