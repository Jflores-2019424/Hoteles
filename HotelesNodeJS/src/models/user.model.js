'use stict'
const { ISO_8601 } = require('moment')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name: String,
    lastName: String,
    birthday: String,
    country: String,
    telefono: String,
    lenguage: String,
    email: String,
    password: String
})

module.exports = mongoose.model("users",UserSchema)