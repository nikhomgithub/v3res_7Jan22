const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
    id:{type:Number,required:true}, //ไอดี
    title:{type:String}, // คำนำหน้า
    name:{type:String}, // ชื่อ 
    phone:{type:[String]}, // โทรศัพท์
    partnerType:{type:String}, // ประเภทคู่ค้า  
    address:{type:[String]},
    //photoUrl1:{type:[String]},
    remark:{type:String}, // หมายเหตุ
    active:{type:Boolean},

    userId:{type:String},
    shopId:{type:String,required:true},
    timestamp:{type:Date},

    remainingCustomerPoint:{type:Number},
    totalSpending:{type:Number}
});

PartnerSchema.index({id:1,name:1})

module.exports = Partner = mongoose.model('Partner', PartnerSchema);


