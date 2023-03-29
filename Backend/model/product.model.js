const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name : {
        type : String,
        required:true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "user"
    },
    company : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
},{versionKey:false});

module.exports = mongoose.model("product",productSchema)