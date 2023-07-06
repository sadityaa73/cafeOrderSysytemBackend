const mongoose = require('mongoose');

const menuItem =  mongoose.Schema({

    itemName:{
        type: String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    itemType:{
        type:String,
        required:true
    },
    itemQuantity:{
        type:Number,
        default:0,
        required:true
    }
})

const menuItemModel = new mongoose.model("menuItem",menuItem);

module.exports = menuItemModel;