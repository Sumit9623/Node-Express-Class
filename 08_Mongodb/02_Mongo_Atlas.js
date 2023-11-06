
require('dotenv').config();


// console.log("Password : ",process.env.DB_PASSWORD);

const express = require('express');
const server = express();
server.get('/',(req,res)=>{
    res.end("Get Request ...");
})
server.listen(process.env.PORT,()=>{
    console.log("Server Started ..!");
})

// Here port Number is from .env file
