const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    id:{type:Number},
    branchName:{type:String},

    photoUrl1:{type:[String]},
    shopInfo:{type:[String]},
    
    defaultCustomerId:{type:Number},

    languageSetting:{type:String},
    printPageSetting:{type:String},
    widthLeft:{type:Number},
    limitRow:{type:Number},
    table:{type:[{
      tableName:{type:String},
      tableActive:{type:Boolean}
      }]
    },


   userId:{type:String},
   shopId:{type:String,required:true}, //
   timestamp:{type:Date},

});

BranchSchema.index({id:1})

module.exports = Branch = mongoose.model('Branch', BranchSchema);
