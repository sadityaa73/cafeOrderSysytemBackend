const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();


app.use(cors());
app.use(bodyParser.json());

const menuItems = require("./api/foodItems");
app.use("/api/foodItems",menuItems);

const cart = require("./api/cart");
app.use("/api/cart",cart);

app.listen(port,(error)=>{
    if(!error){
        console.log("connection successfull!!");
    }else{
        console.log("connection error!");
    }
})