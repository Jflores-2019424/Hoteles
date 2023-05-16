'use strict';

const {Router} = require("express")
const {
    createBill,
    readBill,
    updateBill,
    deleteBill
} = require("../controllers/bill.controller")

const api = Router();

api.post("/create-bill", createBill);

api.get("/read-bill", readBill);

api.put("/update-bill", updateBill);

api.delete("/delete-bill", deleteBill)

module.exports = api;