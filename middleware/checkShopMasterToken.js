const jwt = require('jsonwebtoken');

const checkShopMasterToken = ()=>{

    
    return async (req,res,next)=>{
        try {

            //console.log('checkShopMasterToken........')

            let Shop    
            if(process.env.AUTH_CONNECTION=="true"){
                Shop=require('../modals/Auth').Shop;
            }else{
                Shop=require('../modals/Shop')
            }  

            //console.log(req.headers)
            if(!req.headers.shopauthorization){
                throw {message:`Unauthorized-shop-master1`}
            }
            const shopToken = req.headers.shopauthorization.split(" ")[1];

            if(!shopToken){
                throw {message:`Unauthorized-shop2-master2`}
            }
            
            const shopDecoded = jwt.verify(shopToken, process.env.JWT_SECRET);

            const shopResult=await Shop.findOne({shopName:shopDecoded.id,
                                                code:shopDecoded.code,
                                                }) 

            //authConnection.close()
            //console.log('shopResult.........')
            //console.log(shopResult)
            //console.log(new Date(shopResult.expirationDate))
            
            if(!shopResult){throw {message:`Unauthorized-shop-master3`}}
            if(!shopResult.active){throw {message:"Unauthorized-shop-master4"}} 

            if(shopResult.shopName!="shopMaster"){throw {message:`Unauthorized-shop-master5`}}
            
            return next()
          
        } catch (error) {
            //console.log(`error : ${error}`)
            //authConnection.close()
            return res.status(400).send(error);
            //return res.json({ message:`Unauth`});
        }
               
    }
}

module.exports = checkShopMasterToken