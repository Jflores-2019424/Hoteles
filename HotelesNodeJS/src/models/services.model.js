"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = Schema({
    serviceType: {
        type: String,
        required: true
    },
    serviceDescription: {
        type: String,
        required: true
    },
    serviceCost: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("services", serviceSchema)