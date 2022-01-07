const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    id:{type:Number,required:true}, //ไอดีกลุ่ม
    gcode:{type:String,require:true},
    //gcode:{type:Number,required:true},
    groupName: {type: String,require:true}, //ชื่อกลุ่ม ,
    level:{type:Number},
    
    userId:{type:String},
    shopId:{type:String,required:true},
    timestamp:{type:Date},

});

GroupSchema.index({id:1,groupName:1})

module.exports = Group = mongoose.model('Group', GroupSchema);



/*

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    id:{type:Number,required:true}, //ไอดีกลุ่ม
    gcode:{type:Number,required:true},
    groupName: {type: String}, //ชื่อกลุ่ม ,
    parentGroup:{type:[Number]}, //กลุ่มย่อย
    children:{type:[Number]}, //กลุ่มย่อย
    parentId:{type:Number}, //ไอดีกลุ่มแม่
    mainGroup:{type:Number},//กลุ่มหลัก
    
    userId:{type:String},
    shopId:{type:String,required:true},
    timestamp:{type:Date},

});

GroupSchema.index({id:1,groupName:1})

module.exports = Group = mongoose.model('Group', GroupSchema);


*/