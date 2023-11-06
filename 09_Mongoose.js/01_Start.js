// See Models.js in models folder where we have creted Models
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const pro_route = require("../routes/route_products");
const user_route = require("../routes/route_users");
const auth_router = require("../routes/auth");
const fs = require('fs')
const path = require('path')

const server = express();

main().catch((err) => console.log(err));
// mongodb://localhost:27017/test
// mongodb+srv://Sumit:Sumit%409623@cluster0.jn9nlfm.mongodb.net/ecommerce
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DataBase Connected");
}

// adding router
server.use(express.json()); // middlewaare for bodyParsing
server.use(express.urlencoded()); // middleware for urldecoding

const auth = (req, res, next) => {
  try{
    const token = req.get("Authorization").split("Bearer ")[1];
    // var decoded = jwt.verify(token, process.env.SECRET);
    const publicKey = fs.readFileSync(path.resolve(__dirname,'../public.key'),'utf-8');
    var decoded = jwt.verify(token, publicKey);
    if(decoded.email){
      next();
    }
    else {res.sendStatus(401)}
  }
  catch(err){res.sendStatus(401);}
};

// middlewares for routes
server.use("/auth",auth_router);
server.use("/products",auth, pro_route);
server.use("/users",auth, user_route);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../abc.html'))
})

server.listen(process.env.PORT, () => {
  console.log("Server Started ..!");
});
