const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    id:{type:Number,required:true}, // ok
    date:{type:Date}, // ok
    //new Date().toISOString()
    //2020-12-30T12:40:20.964Z
    remindDate:{type:Date}, //ok
    //branchId:{type:Number}, //ok
    //branchName:{type:String}, //ok

    transactionType:{type:String}, //ok
    transactionStatus:{type:String}, //ok
    active:{type:Boolean}, //ok

    table:{type:String}, //ok
    tableStatus:{type:String}, //ok

    queue:{type:Number},
    queueStatus:{type:String},

    paymentType:{type:String}, //ok

    /*
    transactionName:{type:String},
    transactionCode:{type:String}, // ประเภทเอกสาร
    transactionGroupType:{type:String},
    transactionStatus:{type:String},
    reference:{type:String},
    */

    //status:{type:String},  // สถานะเอกสาร open,close,delete
    //transactionType:{type:String}, // ประเภทเอกสาร

    effectStock:{type:String}, // กระทบสต็อก //fail
    effectSpending:{type:String}, // กระทบจอง //fail
    effectCustomerPoint:{type:String}, // กระทบแผน //fail

    //photoUrl1:{type:[String]}, //

    partnerId:{type:Number}, // ไอดีคู่ค้า //ok
    partnerType:{type:String}, //ประเภทคู่ค้า //ok

    title:{type:String}, // คำนำหน้า //ok
    name:{type:String}, // ชื่อ //ok
    phone:{type:[String]}, // โทรศัพท์  //ok
   
    address:{type:String}, //ok
   
    remark:{type:String}, // หมายเหตุ //ok

    userId:{type:String}, 
    shopId:{type:String,required:true}, //
    timestamp:{type:Date},

    total:{type:Number}, // รวม //ok
    totalReduction:{type:Number}, // ส่วนลด //ok

    reduction:{
        type:[{
            reductionName:{type:String}, //ok
            reductionActive:{type:Boolean}, //ok
            reductionRate:{type:Number}, // ok
            reductionInPercentage:{type:Boolean}, // fail
            reductionAmount:{type:Number} // ok
        }]
    },

    totalTax:{type:Number},
    tax:{
        type:[{
            taxName:{type:String}, //ok
            taxActive:{type:Boolean}, //ok
            taxRate:{type:Number}, //ok
            taxInPercentage:{type:Boolean}, //fail
            taxAmount:{type:Number} //ok
        }]
    },
    grandTotal:{type:Number}, // สุทธิ //ok

    totalPoint:{type:Number},  //ok

    reductCustomerPoint:{type:Number}, //fail

    detail:{   // รายละเอียด
        type: [{
            id:{type:Number,default:0}, //1
            barcode:{type:String}, //2
            productName:{type:String}, //3
            detailTime:{type:Date},
            groupId:{type:Number,default:0}, //4
            groupName:{type:String}, //5

            unit:{type:String}, //6
            price:{type:Number,default:0}, //7 

            priceLevel:{ //8
                type:[{
                    price:{type:Number},
                    remark:{type:String}
                }]
            },
            quantity:{type:Number,default:0}, //9 
            result:{type:Number},//10
            remark:{type:String}, //11
            isRawMat:{type:Boolean}, //12 
            hasDetailProduct:{type:Boolean},
            point:{type:Number},
            //partnerId:{type:Number},//13
            //name:{type:String},//14
            jobStatus:{type:String},

        }],        
    }
});

TransactionSchema.index({id:1})

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema);