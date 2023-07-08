const express = require('express');
const mongoose = require('mongoose');
const cartModel = require('../Modules/cartModel');
mongoose.set('strictQuery',true);


const cart = express.Router();

cart.get('/cart',async(request,response)=>{
    let data = await cartModel.find({});
    try{
        response.status(200).send(data);
    } catch(err){
        response.status(404).send(err.message);
    }
});

const client = mongoose.connect("mongodb+srv://sadityaa73:b9baLDWz6WojMCRJ@cluster0.r8gm1nk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("cartModel connected successfull!!")}).catch((err)=>{console.log("error occured in cartModel!",err.message)});

module.exports = cart;