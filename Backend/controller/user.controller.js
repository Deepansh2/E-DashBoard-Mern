const User = require("../model/user.model");



exports.signup = async (req,res) =>{

    const userObj = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }

    try{
    const user = await User.create(userObj);
    console.log(`new user ${user.name} created`)
    const response = {
        name : user.name,
        email : user.email
    }
    return res.status(201).send({
        message : "New User Created",
        User : response
    })
}catch(err){
    console.log("Error while creating user",err)
    return res.status(500).send({
        message : "Internal server error"
    })
}
}


exports.signin = async (req,res) =>{

    try{

    if(!req.body.email){
        return res.status(400).send({
            message : "Email is not provided"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message : "Password is not Provided"
        })
    }

    const user = await User.findOne({email:req.body.email})
    if(user){
        if(user.password == req.body.password){
            const response = {
                id : user._id,
                name : user.name,
                email : user.email
            }
            return res.status(200).send({
                message : "LoggedIn Successfully",
                user : response
            })
        }else{
            return res.status(400).send({
                message : "Wrong Password"
            })
        }
    }else{
        return res.status(400).send({
            message : "User doesn't exist"
        })
    }
}catch(err){
    console.log("Error while login",err)
    return res.status(500).send({
        message : "Internal server error"
    })
}
}