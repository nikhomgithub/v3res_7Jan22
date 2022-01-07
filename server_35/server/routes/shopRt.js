const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt')
const params=require('./params')

const checkNone=()=>{return (req,res,next)=>{next()}}
const checkShopToken=require('../middleware/checkShopToken');

const param=params.shop

const routeTemplate=[

    {route:"shoplogin",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
     
    {route:"shopsignup",type:"post",useRoute:true, 
     checkAuth:checkNone,checkLevel:checkNone}, 

    {route:"shopmastersignup",type:"post",useRoute:true, 
     checkAuth:checkNone,checkLevel:checkNone},  

    //{route:"payshopfee",type:"post",useRoute:true, 
    //checkAuth:checkShopToken,checkLevel:checkNone}, 

    {route:"shoploginforpayment",type:"post",useRoute:true, 
     checkAuth:checkNone,checkLevel:checkNone}, 

    {route:"resetshoppassword",type:"post",useRoute:true, 
     checkAuth:checkNone,checkLevel:checkNone}, 

     {route:"createshoppassword",type:"post",useRoute:true, 
     checkAuth:checkNone,checkLevel:checkNone}, 

]  

dataRt({router,param,routeTemplate})

module.exports = router;

//shopsignup,shoplogin,ownerlogin,
//shopchangepassword,ownerchangepassword,
//getshop,getlimitshop,deleteshop,updateshop,
//adduser,login,changepassword,
//shopinit,shopbackup,shoprestore,
//userinit,userbackup,userrestore