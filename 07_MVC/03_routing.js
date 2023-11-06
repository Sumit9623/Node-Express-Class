
// for large appliations using routing is better choice

// In this router is diffined in other file and importer+d here and added to server using middlewares

const express = require('express');
const product_router = require('../routes/route_products')
const user_router = require('../routes/route_users')

const server = express();

//middlewares
server.use(express.json()); // middlewaare for bodyParsing
server.use('/products',product_router);  // adding router to server using middleware
server.use('/users',user_router);  // adding router to server using middleware

server.listen(8080,()=>{
    console.log("Server Started");
})
