const express = require("express");
const mongoose = require("mongoose");
const menuModel = require("../Modules/menuModel");
const { response } = require("express");
const cloudinary = require("cloudinary").v2;

mongoose.set("strictQuery", true);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const menu = express.Router();

//get api
menu.get("/", async (request, response) => {
  const data = await menuModel.find({});
  try {
    response.status(200).send(data);
  } catch (err) {
    response.status(400).send(err.message);
  }
});

//post api

menu.post("/menuList", async (request, response) => {
  let file = request.files.file;
  let image_url = await cloudinary.uploader.upload(
    file.tempFilePath,
    (err, result) => {
      if (err) {
        console.log("printing error", err.message);
      } else {
        console.log("printing result", result);
      }
    }
  );
  const data = await menuModel({
    productName: request.body.productName,
    productPrice: request.body.productPrice,
    productQuantity: request.body.productQuantity,
    productType: request.body.productType,
    file: image_url.url,
  });
  try {
    let saveData = data.save();
    response.status(200).send(data);
  } catch (error) {
    response.status(404).send(error.message);
  }
});

//patch api

menu.patch("/update", async (request, response) => {
  let _id = request.body._id;
  let quantity = request.body.productQuantity;
  const data = await menuModel.findByIdAndUpdate(_id, {
    productQuantity: quantity,
  });
  try {
    let saveData = data.save();
    response.status(200).send(data);
  } catch (err) {
    response.status(400).send(err.message);
  }
});


//connection to the mongoDB server:

const client = mongoose
  .connect(
    "mongodb+srv://sadityaa73:j0uMB4hUN3u4BAqh@cluster0.fjehde7.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("menu connection successfull!!");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = menu;
