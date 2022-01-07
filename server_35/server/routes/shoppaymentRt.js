const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt')
const params=require('./params')

const checkNone=()=>{return (req,res,next)=>{next()}}
const checkShopToken=require('../middleware/checkShopToken');
const checkUserLevel=require('../middleware/checkUserLevel')

const param=params.shoppayment

const routeTemplate=[
    

    {route:"payshopfee",type:"post",useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkNone},
    {route:"getshoppayment",type:"post",useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
    {route:"updateshoppayment",type:"post",useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
    {route:"deleteshoppayment",type:"post",useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
]  

dataRt({router,param,routeTemplate})

module.exports = router;
