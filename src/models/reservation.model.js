'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = Schema({
    user: {
        type: Schema.Types.ObectId,
        ref: 'Users'
    },
    bedrooms:{
        type: Schema.Types.ObectId,
        ref: 'Bedrooms'
    },
    servicios: [{
        type: Schema.Types.ObectId,
        }
    ],
    Hotel:{
        type: Schema.Types.ObectId,
        ref: 'Hotel'
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema);