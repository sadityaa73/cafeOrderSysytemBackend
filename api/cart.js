const express = require("express");
const mongoose = require("mongoose");
const cartModel = require("../Modules/cartModel");
mongoose.set("strictQuery", true);

const cart = express.Router();

cart.get("/cart", async (request, response) => {
  const data = await cartModel.find({});
  try {
    response.status(200).send(data);
  } catch (err) {
    response.status(400).send(err.message);
  }
});

cart.post('/cart',async(request,response)=>{
    const data = await cartModel({
        productName:request.body.productName,
        productPrice:request.body.productPrice,
        productQuantity:request.body.productQuantity,
        totalPrice:request.body.totalPrice,
        productImage:request.body.productImage
    });
    try {
        const saveData = data.save();
        response.status(200).send(data);
    } catch (error) {
        response.status(400).send(error.message);
    }
})

const client = mongoose.connect('mongodb+srv://sadityaa73:j0uMB4hUN3u4BAqh@cluster0.fjehde7.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("cart succesfull connected!!")}).catch((err)=>{
    console.log(err.message);
});

module.exports = cart;