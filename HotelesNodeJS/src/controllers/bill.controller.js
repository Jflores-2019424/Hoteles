'use strict';

const Bill = require("../models/bill.model")

const createBill = async(req, res) => {
    const {clinteId} = req.body;
    try{
    let bill = await Bill.findOne({clinteId: clinteId})    

    bill = new Bill(req.body);
    
    bill = await bill.save();

    res.status(200).send({
        message:"Factura creada correctamente",
        bill
    })
    }catch(err){
        throw new Error(err);
    }
};

const readBill = async(req, res) =>{
    try{
        const bill = await Bill.find();

        if(!bill){
            res.status(404).send({
                message:"No existen facturas creadas"
            })
        }else{
            res.status(200).send({bill: bill})
        }
    }catch(err){
        res.status(404).send({
            message:"Error al listar facturas",
            err,
        })
    }
};

const updateBill = async(req, res) =>{
    try{
        const id = req.params.id;
        const billEdit = {...req.body};

        const billComplete = await Bill.findByIdAndUpdate(id, billEdit, {
            new: true,
        });
        return res.status(200).send({
            message:"Factura actualizada",
            billComplete
        })
    }catch(err){
        throw new Error(err)
    }
};

const deleteBill = async(req, res) => {
    try{
        const id = req.params.id;
        const billDelete = await Bill.findByIdAndDelete(id);
        return res.status(200).send({
            message:"Factura eliminada correctamente",
            billDelete
        })
    }catch(err){
        throw new Error(err);
    }
};

module.exports = {
    createBill,
    readBill,
    updateBill,
    deleteBill
}