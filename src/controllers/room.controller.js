"use strict";

const Room = require("../models/room.model");

const createRoom = async(req, res) =>{
    const {roomType} = req.body;
    try{
        let room = await Room.findOne({roomType: roomType});
        if(room){
            return res.status(400).send({
                message:"Este tipo de habitacion ya existe",
                ok: false,
                room: room
            });
        }

        room = new Room(req.body);

        room = await room.save();

        res.status(200).send({
            message: `Habitacion ${roomType} creada correctamente`,
            room,
        });
    }catch(err){
        throw new Error(err)
    }
};

const readRooms = async(req, res) =>{
    try {
        const rooms = await Room.find();


        if(!rooms){
            res.status(404).send({ message: "No existen habitaciones registradas"});
        } else{
            res.status(200).json({ rooms:rooms });
        }
    }catch(err){
        res.status(404).send({
            message: "Error al listar las habitaciones",
            err,
        });
    }
};

const updateRooms = async(req, res) =>{
    try{
        const id = req.params.id;
        const roomEdit = { ...req.body };

        const roomComplete = await Room.findByIdAndUpdate(id, roomEdit, {
            new: true,
        });
        return res.status(200).send({
            message:"Habitacion Actualizada",
            roomComplete
        })
    }catch(err){
        throw new Error(err);
    }
};

const deleteRooms = async(req, res) =>{
    try{
        const id = req.params.id;
        const roomDelete = await Room.findByIdAndDelete(id);
        return res.status(200).send({
            message:"Usuario eliminado correctamente",
            roomDelete
        });
    }catch(err){
        throw new Error(err)
    }
};

module.exports = {
    createRoom,
    readRooms,
    updateRooms,
    deleteRooms
}