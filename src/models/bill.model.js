"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = Schema({
    clienteId:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    nit: {
        type: String,
        required: true  
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("bills", billSchema)