"use strict";

const Service = require("../models/services.model")

const createService = async(req, res) =>{
    const {serviceType} = req.body;
    try{
        let service = await Service.findOne({serviceType: serviceType});
        if(service){
            return res.status(400).send({
                message:"Este tipo de servicio ya existe",
                ok: false,
                service: service
            })
        }

        service = new Service(req.body);

        service = await service.save();

        res.status(200).send({
            message:`Servicio ${serviceType} creado correctamente`,
            service
        })
    }catch(err){
        throw new Error(err);
    }
};

const readService = async(req, res) =>{
    try{
        const service = await Service.find();

        if(!service){
            res.status(404).send({
                message:"No existen servicios guardados"
            })
        }else{
            res.status(200).send({service: service})
        }
    }catch(err){
        res.status(404).send({
            message:"Error al listar los servicios",
            err,
        })
    }
};

const updateService = async(req, res) =>{
    try{
        const id = req.params.id;
        const serviceEdit = {...req.body};

        const serviceComplete = await Service.findByIdAndUpdate(id, serviceEdit, {
            new: true,
        });
        return res.status(200).send({
            message:"Servicio actualizado",
            serviceComplete
        })
    }catch(err){
        throw new Error(err);
    }
};

const deleteService = async(req, res) =>{
    try{
        const id = req.params.id;
        const serviceDelete = await Service.findByIdAndDelete(id);
        return res.status(200).send({
                message:"Servicio eliminado correctamente",
                serviceDelete
        })
    }catch(err){
        throw new Error(err);
    }
};

module.exports = {
    createService,
    readService,
    updateService,
    deleteService
}