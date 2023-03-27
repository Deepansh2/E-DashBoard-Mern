const dbConfig = require("./config/db.config")
const serverConfig = require("./config/server.config")

const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const mongoose = require("mongoose")
mongoose.connect(dbConfig.DB_URL,()=>{
    console.log("Connected with mongodb")
},err=>{
    console.log("Error while connecting to mongodb",err)
})


app.listen(serverConfig.PORT,()=>{
    console.log("Server started at Port:",serverConfig.PORT)
})