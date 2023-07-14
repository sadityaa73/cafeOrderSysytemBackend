const mongoose = require('mongoose');


const menu = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productType:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    }
})

const menuModel = new mongoose.model('menu',menu);

module.exports = menuModel;