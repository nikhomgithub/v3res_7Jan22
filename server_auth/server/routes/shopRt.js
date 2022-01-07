const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt')
const params=require('./params')

const checkNone=()=>{return (req,res,next)=>{next()}}
//const checkShopToken=require('../middleware/checkShopToken');

const param=params.shop

const routeTemplate=[
    
    //{route:"shopsignup",type:"post",useRoute:true, 
    //checkAuth:checkNone,checkLevel:checkNone}, 
    
    {route:"shoplogin",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"ownerlogin",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"shopchangepassword",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"ownerchangepassword",type:"post",useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    
    {route:"shopinit",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    
    {route:"shoprestore",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"shopbackup",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    
    {route:"getshop",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"getlimitshop",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"deleteshop",type:"post", useRoute:true, 
    checkAuth:checkNone,checkLevel:checkNone},
    {route:"updateshop",type:"post", useRoute:true, 
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