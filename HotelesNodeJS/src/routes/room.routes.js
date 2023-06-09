"use strict";

const {Router} = require("express");
const {createRoom,
    readRooms,
    updateRooms,
    deleteRooms,
    searchRoomById} = require("../controllers/room.controller");
const {check} = require("express-validator");
const validateParams = require("../middlewares/validate-params");

const api = Router();

api.post("/create-room", createRoom);

api.get("/read-room", readRooms);

api.put("/update-room", updateRooms);

api.delete("/delete-room", deleteRooms);

api.get("/search-room/:id", searchRoomById)

module.exports = api;