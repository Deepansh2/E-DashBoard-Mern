const dbConfig = require("./config/db.config")
const serverConfig = require("./config/server.config")


const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const cors = require("cors")
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const mongoose = require("mongoose")
mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection
db.on("error",()=>{
    console.log("Error while connecting to mongodb")
})
db.once("open",()=>{
    console.log("Connected to mongodb")
})

require("./route/user.route")(app)

app.listen(serverConfig.PORT,()=>{
    console.log("Server started at Port:",serverConfig.PORT)
})