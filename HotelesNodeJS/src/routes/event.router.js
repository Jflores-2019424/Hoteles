'use strict'
const express = require ('express')
const {Router} = require ('express')
const { createEvent, listEvent, editEvent, deleteEvent, addTypeEvent, editTypeEvent, deleteType, searchEventById } = require('../controllers/event.controller')
const api = Router()

api.post('/create-event', createEvent)
api.get('/list-events', listEvent)
api.put('/edit-event/:id', editEvent )
api.delete('/delete-event/:id', deleteEvent )
api.get('/search/:id', searchEventById )


module.exports = api