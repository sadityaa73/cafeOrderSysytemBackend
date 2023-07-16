const mongoose = require("mongoose");

const cart = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const cartModel = new mongoose.model("cartModel", cart);

module.exports = cartModel;
