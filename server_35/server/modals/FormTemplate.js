const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormTemplateSchema = new Schema({
    //id:{type:Number,required:true}, //ไอดีกลุ่ม
    formName:{type:String},
    formHead:{type:String},
    formLanguage:{type:String},
    id:{type:Number,required:true},//userId
    shopId:{type:String,required:true},
    template:{
        type:[
            {
                key:{type:String},
                lb:{type:String}, 
            }
        ]
       
    },        
});

FormTemplateSchema.index({id:1})

module.exports = FormTemplate = mongoose.model('FormTemplate', FormTemplateSchema);