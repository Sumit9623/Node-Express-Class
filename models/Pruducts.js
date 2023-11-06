
const mongoose = require('mongoose');
const {Schema} = mongoose;


// Schema  -> for validations  --> provides abstraction from main data
// Schema is used for defining data
//  it can have type of data, constraints on data etc
// by defining schema we can add validations to data to be inserted i.e. we are adding constraints

// Schema for products
const productSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    price: {type:Number, required:true, min:[0,"error"]},
    discountPercentage: {type:Number, max:20},
    rating: Number,
    brand: {type:String, required:true},
    category: String,
    thumbnail:{type:String, required:true},
    images:[String]
})
exports.product = mongoose.model('product',productSchema);

// study some validations for models

// Schema for users



