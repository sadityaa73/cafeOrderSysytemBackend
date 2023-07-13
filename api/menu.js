const express = require('express');
const mongoose = require('mongoose');
const menuModel = require('../Modules/menuModel');
const { response } = require("express");
const cloudinary = require('cloudinary').v2;

mongoose.set("strictQuery",true);

cloudinary.config({ 
    cloud_name: "dbjrcyxsc", 
    api_key: 536155681762353, 
    api_secret:"p6rxH5zff9mC7uI7TW18svzeNKo",
    secure:true
  });

const menu = express.Router();

//get api
menu.get('/',async(request,response)=>{
    const data = await menuModel.find({});
    try{
        response.status(200).send(data);
    }catch(err){
       response.status(400).send(err.message);
    }
})

//post api

menu.post('/menuList',async(request,response)=>{
    let file = request.files.file;
    let image_url = await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if (err) {
            console.log("printing error", err.message)
        } else { console.log("printing result",result); }

    });
    const data = await menuModel({
        productName:request.body.productName,
        productPrice:request.body.productPrice,
        productQuantity:request.body.productQuantity,
        file:image_url.url
    });
    try {
        let saveData = data.save();
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})



const client = mongoose.connect("mongodb+srv://sadityaa73:j0uMB4hUN3u4BAqh@cluster0.fjehde7.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("connection successfull!!")}).catch((err)=>{console.log(err.message)});

module.exports = menu;