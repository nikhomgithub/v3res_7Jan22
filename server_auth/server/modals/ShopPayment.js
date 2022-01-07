const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopPaymentSchema = new Schema({
    id:{type:Number,required:true}, //1
    userId:{type:String},  //2
    shopId:{type:String,required:true}, //3
    timestamp:{type:Date}, //4
    photoUrl1:{type:[String]}, //5 
    
    isCheck:{type:Boolean}, //6
    hasProblem:{type:Boolean}, //7

    transferDate:{type:Date}, //8
    accountName:{type:String}, //9
    accountNumber:{type:String}, //10
    transferAmount:{type:Number}, //11
    fromBank:{type:String}, //12
    checkBy:{type:String}, //13
    
    addMonth:{type:Number}, //14
    newExpirationDate:{type:Date}, //15

    dateIn:{type:Date}, //16
    ownerName:{type:String}, //17
    ownerSurName:{type:String}, //18
    ownerEmail:{type:String}, //19
    expirationDate:{type:Date}, //20 
    tempExpirationDate:{type:Date}, //21
    monthlyFee:{type:Number}, //22
    remainingBalance:{type:Number}, //23
});

ShopPaymentSchema.index({shopId:1})

module.exports = ShopPayment = mongoose.model('ShopPayment', ShopPaymentSchema);