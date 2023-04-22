'use strict';

const {Router} = require("express");
const {createService,
    readService,
    updateService,
    deleteService
} = require("../controllers/services.controller");


const api = Router();

api.post("/create-service", createService);

api.get("/read-services", readService);

api.put("/update-service", updateService);

api.delete("/delete-service", deleteService);

module.exports = api;