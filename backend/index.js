const port = 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer=require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://nitishpandeypandey7:NhW6xD8g2BoyaWR0@cluster0.vs1qn.mongodb.net/")

//API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination: '/upload/images';
    filename:(req,file, cb)=>{
        return cb(null, {fieldname}_₹{Date.now()}₹{path.extname(file.originalname)})
    }
})
app.listen(port,(error)=>{

    if (!error) {
        console.log("Server Running on Port "+port)
        }
        else
        {
        console.log("Error : "+error)
        }
})