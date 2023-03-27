const User = require("../model/user.model");



exports.create = async (req,res) =>{

    const userObj = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }

    try{
    const user = await User.create(userObj);
    return res.status(201).send({
        message : "New User Created",
        User : user
    })
}catch(err){
    console.log("Error while creating user",err)
    return res.status(500).send({
        message : "Internal server error"
    })
}
}