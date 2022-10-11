const mongoose = require('mongoose')

const shopList = new mongoose.Schema(
    { 
        groceryItem: String, 
        isPurchased: Boolean
    }
);

module.exports = mongoose.model("ShopList",shopList)