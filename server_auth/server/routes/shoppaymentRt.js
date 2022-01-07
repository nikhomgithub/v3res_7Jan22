const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt')
const params=require('./params')

const checkNone=()=>{return (req,res,next)=>{next()}}
//const checkShopToken=require('../middleware/checkShopToken');

const param=params.shoppayment

const routeTemplate=[
    
  

]  

dataRt({router,param,routeTemplate})

module.exports = router;
