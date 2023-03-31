const productController = require("../controller/product.controller")
const {auth} = require("../middleware/index")


module.exports = (app) =>{

    app.post("/mern/product",[auth.verify],productController.create)
    app.get("/mern/products",[auth.verify],productController.findAll)
    app.delete("/mern/product/:id",[auth.verify],productController.delete)
    app.get("/mern/product/:id",[auth.verify],productController.findOne)
    app.put("/mern/product/:id",[auth.verify],productController.update)
    app.get("/mern/product/search/:key",productController.search)
}