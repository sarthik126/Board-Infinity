const mongoose = require('mongoose')

const cart = new mongoose.Schema(
    { 
        name: String,
        imageURL: String,
        price: String,
        description: String
    }
);

module.exports = mongoose.model("Cart",cart)