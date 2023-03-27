const userController = require("../controller/user.controller");


module.exports = (app) =>{

    app.post("/mern/user",userController.create)
}