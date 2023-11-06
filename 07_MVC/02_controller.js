

//  in this most of the controlling functions are written in separate folder files
//  they are imported and used where they need
const express = require('express');
const server = express();
const product_operations = require('../controller/products')

// Body parser
server.use(express.json());

// REST API methods
server.get('/products',product_operations.getAllProducts);
server.get('/product/:id',product_operations.getOneProduct);
server.post('/products',product_operations.postProduct);
server.put('/product/:id',product_operations.replaceProduct);
server.patch('/product/:id',product_operations.changeProduct);
server.delete('/product/:id',product_operations.deleteProduct);

server.listen(8080,()=>{
    console.log("Server Started...!");
});