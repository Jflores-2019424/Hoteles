'use stict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventScheama = Schema({
    name: String,
    guests: {
        type: Number,
        required: true
    },
    date: String,
    eventeType:[{
        nameType: String,
        descriptionType: String
    }]
})

module.exports = mongoose.model("events", EventScheama)