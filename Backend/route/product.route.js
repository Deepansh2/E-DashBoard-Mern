const productController = require("../controller/product.controller")



module.exports = (app) =>{

    app.post("/mern/product",productController.create)
    app.get("/mern/products",productController.findAll)
    app.delete("/mern/product/:id",productController.delete)
    app.get("/mern/product/:id",productController.findOne)
    app.put("/mern/product/:id",productController.update)
    app.get("/mern/product/search/:key",productController.search)
}