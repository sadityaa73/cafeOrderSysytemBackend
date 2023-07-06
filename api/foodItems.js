const express = require('express');
const mongoose = require('mongoose');
const menuItemModel = require("../Modules/menuItemModule");
mongoose.set('strictQuery', true);

const menu = express.Router();

menu.get('/menuItems',async(request,response)=>{
    const getData = await menuItemModel.find({});
    try {
        response.status(200).send(getData);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

menu.post('/menuItems',async(request,response)=>{
    const data = await menuItemModel({
        itemName:request.body.itemName,
        itemPrice:request.body.itemPrice,
        itemType:request.body.itemType,
        itemQuantity:request.body.itemQuantity
    })
    try{
        let dataSaved = data.save();
        response.status(200).send(data);
    }catch(err){
        response.status(404).send(err.message);
    }
});

menu.patch('/updateQuantity',async(request,response)=>{
    let id = request.body._id;
    let quantity = request.body.itemQuantity;
    let updateQuant = await menuItemModel.findByIdAndUpdate(id,{itemQuantity:quantity});
    try{
       response.status(200).send(updateQuant);
    }catch(err){
       response.status(404).send(err.message);
    }
})

const client = mongoose.connect("mongodb+srv://sadityaa73:b9baLDWz6WojMCRJ@cluster0.r8gm1nk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("menuItemModel connected successfull!!")}).catch((err)=>{console.log("error occured in menuItemsModel!",err.message)});

module.exports = menu;