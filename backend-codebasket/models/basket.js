const mongoose = require('mongoose')


const basketSchema = new mongoose.Schema({
    html:{
        type: String,
        required: false
    },
    css:{
        type: String,
        required: false
    },
    js:{
        type: String,
        required: false
    },
    createdDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    basketName:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Basket', basketSchema)