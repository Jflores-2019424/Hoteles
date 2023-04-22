'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = Schema({
    roomType: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    roomAmount: {
        type: String,
        required: true
    },
    hotel: [{
        
    }]
})

module.exports = mongoose.model("rooms", roomSchema );