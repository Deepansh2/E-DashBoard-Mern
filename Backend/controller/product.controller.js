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


exports.delete = async(req,res) =>{

    try{
    const product = await Product.findOne({_id : req.params.id})
    
    if(product){
        const product = await Product.deleteOne({_id:req.params.id})
        return res.status(200).send({
            message : "Deleted Successfully",
            Product : product
        })
    }else{
        return res.status(400).send({
            message : "Product doesn't exist"
        })
    }
}catch(err){
    console.log("Error while deleting Product",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}

exports.findOne = async(req,res) =>{

    try{
    const product = await Product.findById(req.params.id)
    return res.status(200).send(product)
    }catch(err){
        console.log("Error while finding product by Id",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}