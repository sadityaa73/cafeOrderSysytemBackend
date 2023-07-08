const mongoose = require('mongoose');

const cart = mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    itemQuantity:{
        type:Number,
        required:true,
    },
    totalAmount:{
        type:Number,
        required:true
    }
});


let cartModel = new mongoose.model("catItem",cart);

module.exports = cartModel;