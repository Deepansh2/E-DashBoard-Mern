const Product = require("../model/product.model");


exports.create = async (req,res) =>{

    const productObj = {
        name : req.body.name,
        price : req.body.price,
        category : req.body.category,
        userId : req.body.userId,
        company : req.body.company,
        description : req.body.description
    }

    try{
    const product = await Product.create(productObj)

    console.log(`New Product ${product.name} created`)
    return res.status(201).send(product)
    }catch(err){
        console.log("Error while creating Product",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}


exports.findAll = async (req,res) =>{

    try{
    const products = await Product.find({})
    return res.status(200).send(products)
    }catch(err){
        console.log("Error while fetching all Product",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}