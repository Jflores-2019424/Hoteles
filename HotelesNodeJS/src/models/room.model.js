'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = Schema({
    roomType: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true
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
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("rooms", roomSchema );