const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasicDataSchema = new Schema({

    id:{type: Number,required:true}, // ไอดี

    //backupSetting:{type:String},
    title:{type:[String]}, // คำนำหน้า
    unit:{type:[String]}, // หน่วย
    userLevel:{type:[String]}, // ระดับผู้ใช้

    branch:{type:[{
        branchId:{type:Number},
        branchName:{type:String}
    }]},//สาขา
    //transactionType:{type:[String]},
    transactionStatus:{type:[String]},

    jobStatus:{type:[String]},

    tableStatus:{type:[String]},
    queueStatus:{type:[String]},
    partnerType:{type:[String]}, // สถานะเอกสาร
    //language:{type:[String]},

    paymentType:{type:[String]},

    effectCustomerPoint:{type:[String]},
    effectSpending:{type:[String]},
    effectStock:{type:[String]},

    position:{type:[String]},

    transaction:{type:[{
        transactionType:{type:String},    
        effectStock:{type:String},// กระทบสต็อก
        effectSpending:{type:String},// กระทบจอง
        effectCustomerPoint:{type:String},//  กระทบแผน
    }]},

    tax:{type:[{
        taxName:{type:String},
        taxActive:{type:Boolean},
        taxRate:{type:Number},
        taxInPercentage:{type:Boolean}
    }]},

    reduction:{type:[{
        reductionName:{type:String},
        reductionActive:{type:Boolean},
        reductionRate:{type:Number},
        reductionInPercentage:{type:Boolean}
    }]},

    userId:{type:String},
    shopId:{type:String,required:true}, //
    timestamp:{type:Date},

    printPage:{type:[{
        printId:{type:Number},
        printPageName:{type:String},
        widthUnit:{type:String},
        fontUnit:{type:String},
        totalWidth:{type:Number},
        showTableHead:{type:Boolean},
        header1:{type:[{
            printLb:{type:String},
            printValue:{type:String},
            printFieldName:{type:String},
            printFontSize:{type:String},
            printWidth:{type:String},
            printPosition:{type:String},
            show:{type:Boolean}
        }]},
        header2:{type:[{
            printLb:{type:String},
            printValue:{type:String},
            printFieldName:{type:String},
            printFontSize:{type:String},
            printWidth:{type:String},
            printPosition:{type:String},
            show:{type:Boolean}
        }]},
        table1:{type:[{
            printLb:{type:String},
            printValue:{type:String},
            printFieldName:{type:String},
            printFontSize:{type:String},
            printWidth:{type:String},
            printPosition:{type:String},
            show:{type:Boolean}
        }]},
        footer1:{type:[{
            printLb:{type:String},
            printValue:{type:String},
            printFieldName:{type:String},
            printFontSize:{type:String},
            printWidth:{type:String},
            printPosition:{type:String},
            show:{type:Boolean}
        }]},
        footer2:{type:[{
            printLb:{type:String},
            printValue:{type:String},
            printFieldName:{type:String},
            printFontSize:{type:String},
            printWidth:{type:String},
            printPosition:{type:String},
            show:{type:Boolean}
        }]},
    }]},

    routeAuth:{type:[{
        id:{type:Number}, //ไอดี
        routeAddress:{type:String}, // เราท์แอดเดรส
        routeName:{type:String}, // เราท์เนม
        userLevel:{type:[String]} // ระดับผู้ใช้
    }],default:[]}


});

BasicDataSchema.index({id:1})

module.exports = BasicData = mongoose.model('BasicData', BasicDataSchema);


/*

    transactionType:{type:[{
        groupId:{type:String},
        groupName:{type:String},
        effectOrder:{type:String},
        effectPlan:{type:String},
        effectStock:{type:String},
    }]
    }, // ประเภทเอกสาร
    




*/