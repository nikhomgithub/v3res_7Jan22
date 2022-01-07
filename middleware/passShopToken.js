const jwt = require('jsonwebtoken');
const { runInNewContext } = require('vm');

const passShopToken = ()=>{
    return (req,res,next)=>{
        req.shopId="shopa"
        req["user"]={id:1}

        //console.log('req')
        //console.log(req.user)
        next()
    }

}

module.exports = passShopToken


