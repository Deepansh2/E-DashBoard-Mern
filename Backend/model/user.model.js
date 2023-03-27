const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique: true,
        minLength:10,
        lowercase:true
    },
    password : {
        type : String,
        required:true
    },
    createdAt : {
        type : Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    },
    updatedAt : {
        type : Date,
        default:()=>{
            return Date.now()
        }
    }
},{versionKey:false})

module.exports = mongoose.model("user",userSchema)