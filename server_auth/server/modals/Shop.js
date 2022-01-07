const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
  
        shopName: {type: String,unique:true},//input  ชื่อร้าน 
             //shopName: {type: String,required: true,unique:true}
        password:{type:String},//input  รหัส 
        active:{type:Boolean},//autogen by mongo
        code:{type:String},//autogen by node
             //uuid.v4()   
        dateIn:{type:Date},

    
        ownerName:{type:String},//input ชื่อเจ้าของ 
        ownerSurName:{type:String},//input ชื่อเจ้าของ 
        ownerEmail:{type:String}, //อีเมลเจ้าของ

        recoveryPassword:{type:String},

        expirationDate:{type:Date},
        tempExpirationDate:{type:Date},

        monthlyFee:{type:Number},
        remainingBalance:{type:Number},

        photoUrl1:{type:[String]}, // 

});

ShopSchema.index({shopName:1,ownerName:1})

module.exports = Shop = mongoose.model('Shop', ShopSchema);