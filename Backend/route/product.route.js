const productController = require("../controller/product.controller")



module.exports = (app) =>{

    app.post("/mern/product",productController.create)
}