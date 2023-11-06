
// This is file to understand the REST API


const express = require('express');
const fs = require('fs');
const server = express();

//body parser
server.use(express.json())

// data from Dummy.json
const data = JSON.parse(fs.readFileSync('Dummy.json','utf-8'));
const products = data.products;

// ****************************************************************************
// Read API

// 1) sending all products
server.get('/products',(req,res)=>{
    res.json(products);
})

// 2) sending only product mentioned in url
server.get('/product/:id',(req,res)=>{
    const id = +req.params.id;
    const pro = products.find(p=>p.id===id);
    res.json(pro);
})

// *****************************************************************************
//   create API
// using POST method
server.post('/products',(req,res)=>{
    // console.log(req.body);
    res.send("data Submitted");
    products.push(req.body);
    console.log(products);
    // data in Dummy.json is not changed just we have updated array temparary
})

// ******************************************************************************
//  Upadate API

//  1) Using put method
server.put('/products/:id',(req,res)=>{
    const pro_id = +req.params.id;
    const product_index = products.findIndex((p)=>{return p.id===pro_id});  // finding index of given product in array
    products.splice(product_index,1,{...req.body,id:pro_id});               // updating array by removing 1 element form that index and add 1 new element in that position
    res.status(200).json({type:"put"});

})

// 2) using PATCH method
server.patch('/products/:id',(req,res)=>{
    const pro_id = +req.params.id;
    const product_index = products.findIndex((p)=>{return p.id===pro_id});  // finding index of given product in array
    const product = products[product_index];
    products.splice(product_index,1,{...product,...req.body});
    res.status(200).json({Type:"patch"});
})

//  Both patch and put can be used for updates

// ***************************************************************************************
// Delete API
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const pro_ind = products.findIndex((p)=>{return p.id===id});
    products.splice(pro_ind,1);
    res.status(200).json({type:"Dele"})
})

server.listen(8080);