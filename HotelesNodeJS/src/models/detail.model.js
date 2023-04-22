'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = Schema ({
    clientName: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    roomPrice: {
        type: Number,
        required: true,
    },
    entryDate: {
        type: Date,
        required: true,
    },
    departureDate: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model("detail", detailSchema);