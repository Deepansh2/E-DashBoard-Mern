const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.config")
const User = require("../model/user.model")

const verify = (req,res,next) =>{

    const token = req.headers["x-access-token"]

    if(!token){
        return res.status(403).send({
            message : "No token Provided"
        })
    }else{
        jwt.verify(token,authConfig.secret,async (err,decoded)=>{
            if(err){
                return res.status(403).send({
                    message : "Unauthorized! Access prohibited"
                })
            }
            req.user = await  User.findOne({name:decoded.name})
            next()
        })
    }
}

const jwtToken = {
    verify : verify
}

module.exports = jwtToken