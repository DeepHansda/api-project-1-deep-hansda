const mongoose = require('mongoose')
const validator = require('validator')


const products = mongoose.Schema({
    title : {
        type: String,
        required: true,
        min:3
    },

    offer : {
        type: Number,
    },

    price: {
        type: Number,
        required: true,
    },

    expectedDeliveryDate:{
        type:Date,
        required: true,
    },

    details: {
        type: String
    },
    
    inStock:{
        type: Boolean
    }
})

const productsModel = mongoose.model("List",products);

module.exports =productsModel;