const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {authConnection} = require('./AuthConnection');

const ShopSchema = new Schema({

    /*1*/    shopName: {type: String,unique:true},//input  ชื่อร้าน 
             //shopName: {type: String,required: true,unique:true}
    /*2*/    password:{type:String},//input  รหัส 
    /*3*/    active:{type:Boolean},//autogen by mongo
    /*4*/    code:{type:String},//autogen by node
             //uuid.v4()   
    /*5*/    dateIn:{type:Date},
             //new Date().toISOString()
             //2020-12-30T12:40:20.964Z
    
    /*6*/    ownerName:{type:String},//input ชื่อเจ้าของ 
             ownerSurName:{type:String},//input ชื่อเจ้าของ 
             //ownerName:{type:String,required:true,unique:true}
    /*7*/    //ownerPassword:{type:String},//input รหัส
    /*8*/    //ownerActive:{type:Boolean},//autogen by mongo
    /*9*/    //ownerCode:{type:String},//autogen by node 
        
    /*10*/   ownerEmail:{type:String}, //อีเมลเจ้าของ

            recoveryPassword:{type:String},

            expirationDate:{type:Date},
            tempExpirationDate:{type:Date},

            monthlyFee:{type:Number},
            remainingBalance:{type:Number},

            photoUrl1:{type:[String]}, // 

    });
    
ShopSchema.index({shopName:1,ownerName:1})

//===========================

const UserSchema = new Schema({
    /*1*/     id:{type:Number,required:true}, // ไอดี
    /*2*/     username:{type:String,required:true}, // ชื่อผู้ใช้ 
    /*3*/     password:{type:String,required:true}, // รหัส 
    /*4*/     active:{type:Boolean,required:true}, // 
    /*5*/     code:{type:String,required:true}, //
              //uuid.v4()   
    /*6*/     userLevel:{type:String,required:true}, // ระดับผู้ใช้
    
    /*7*/     shopId:{type:String,required:true}, // 
    /*8*/     dateIn:{type:Date,required:true}, //
              //new Date().toISOString()
              //2020-12-30T12:40:20.964Z
              //branchId:{type:Number},
              //branchName:{type:String},
    /*9*/     name:{type:String}, // ชื่อ
    /*10*/    surname:{type:String}, // สกุล
    
    });
    
UserSchema.index({id:1,username:1,shopId:1})

//===============================
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
//===============================

const User = authConnection.model('User', UserSchema); 
const Shop = authConnection.model('Shop', ShopSchema);
const ShopPayment = authConnection.model('ShopPayment', ShopPaymentSchema);

module.exports = {
    User,
    Shop,
    ShopPayment
};