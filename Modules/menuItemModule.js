const mongoose = require('mongoose');

const menuItem =  mongoose.Schema({

    itemName:{
        type: String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    }
})

const menuItemModel = new mongoose.model("menuItem",menuItem);

module.exports = menuItemModel;