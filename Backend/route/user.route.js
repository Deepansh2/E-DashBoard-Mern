const userController = require("../controller/user.controller");


module.exports = (app) =>{

    app.post("/mern/user/signup",userController.signup)
    app.post("/mern/user/signin",userController.signin)
}