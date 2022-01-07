const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const bodyParser = require('body-parser');

const app = express();

//allow cross origin
app.use(cors());
//body parser for json data
app.use(express.json());

//body parser for form data
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));

//=====================
app.use("/p35upload",express.static('p35upload'));

app.get("/p35test",(req,res)=>{
    return res.status(200).json({msg:"Pass :you access to p35 server"});
})

const shopRt = require('./routes/shopRt');
app.use("/p35shop",shopRt);

const userRt = require('./routes/userRt');
app.use("/p35user",userRt);

const basicDataRt = require('./routes/basicDataRt');
app.use("/p35basicdata",basicDataRt);

const tableTemplateRt = require('./routes/tableTemplateRt');
app.use("/p35tabletemplate",tableTemplateRt);

const productRt = require('./routes/productRt');
app.use("/p35product",productRt);

const groupRt = require('./routes/groupRt');
app.use("/p35group",groupRt);

const partnerRt = require('./routes/partnerRt');
app.use("/p35partner",partnerRt);

const transactionRt = require('./routes/transactionRt');
app.use("/p35transaction",transactionRt);

const formTemplateRt = require('./routes/formTemplateRt');
app.use("/p35formtemplate",formTemplateRt);

const stickerRt = require('./routes/stickerRt');
app.use("/p35sticker",stickerRt);

const branchRt = require('./routes/branchRt');
app.use("/p35branch",branchRt);

const shoppaymentRt = require('./routes/shoppaymentRt');
app.use("/p35shoppayment",shoppaymentRt);

//-----------------------------------------
//Serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static('../client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'/../client','build','index.html'));
    })
  }

//never reach this line under development
app.use((req,res,next)=>{
    const error=new Error();
    error.status=404;
    error.message="Not Found";
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

module.exports = app;

/*
http://localhost:3000/upload/ab80a5f4-dbc0-4f69-9b77-67089b253ae1-p01.jpeg
*/