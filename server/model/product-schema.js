import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
id:{
    type:String,
    required:true,
    unique:true
},

Url:String,
detailUrl:String,
title:Object,
price:Object,
quantity:Number,
description:String,
discount:String,
tagline:String
});
const product = mongoose.model('products',productSchema);

export default product;