


const Product = require('../models/Pruducts').product;
const ejs = require('ejs');
const path = require('path');

//********************************************************************************************************************** */
// below controller functions are for server side rendering
exports.getAllProducts_SSR= async (req,res)=>{
    console.log("I am in ssr")
    const products = await Product.find();
    ejs.renderFile(path.resolve(__dirname,'../12_Serverside_rendering/abc.ejs'), {products:products}, function(err, str)
    {
        res.send(str);
    });
}

exports.post_form_SSR = async (req,res)=>
{
    console.log("I am here");
    ejs.renderFile(path.resolve(__dirname,'../12_Serverside_rendering/02_Form_using_Serverside_rendering.ejs'), function(err, str){res.send(str);});
}

//************************************************************************************************************************** */

exports.getAllProducts= async(req,res)=>{
    try{
        console.log(req.query);

        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}

exports.getOneProduct = async (req,res)=>{
    const id = req.params.id;   //  getting id from url as string
    try{
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}

exports.postProduct = async (req,res)=>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({"type" : "post"});
    }
    catch(err)  // if validations occures it will catch erros
    {
        res.status(400).json(err);
    }
}

exports.replaceProduct = async (req,res)=>{
    const pro_id = req.params.id;  // pro_id will be in string
    try{
        const dat = await Product.replaceOne({_id:pro_id},req.body);
        res.status(200).json(dat);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}

exports.changeProduct = async (req,res)=>{
    const pro_id = req.params.id;
    try{
        const dat = await Product.findByIdAndUpdate({_id:pro_id},req.body,{upsert:false,new:true})
        res.status(200).json(dat);
    }
    catch(err) {res.status(400).json(err);}
}

exports.deleteProduct = async (req,res)=>{
    const id = req.params.id;
    try{
        const dat = await Product.findByIdAndDelete({_id:id},{new:true});
        res.status(200).json(dat);
    }
    catch(err){res.status(400).json(err)}
}


//  ******************************   Old method by reading and updating Dummy.json  **************************************



// const fs = require('fs');
// const { json } = require('express');
// // const index = fs.readFileSync('index.html', 'utf-8');

// const data = JSON.parse(fs.readFileSync('Dummy.json','utf-8'));
// const products = data.products;

// exports.createProduct = (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   res.status(201).json(req.body);
// };

// exports.getAllProducts = (req, res) => {
//   res.json(products);
// };

// exports.getProduct = (req, res) => {
//   const id = +req.params.id;
//   const product = products.find((p) => p.id === id);
//   res.json(product);
// };

// exports.replaceProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };

// exports.changeProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1, { ...product, ...req.body });
//   res.status(201).json();
// };

// exports.deleteProduct = (req, res) => {
//   const id = +req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1);
//   res.status(201).json(product);
// };

