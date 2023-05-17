'use strict'
const Event = require ('../models/event.model')

const createEvent = async(req,res)=>{
    const {date,name} =  req.body
    try{
        let event = await Event.findOne({date: date })
        if (event){
            return res.status(400).send({
                message: `la fecha : ${date} esta reservada`,
                ok: false,

            })
        }
        event = new Event(req.body)
        event = await event.save()
        res.status(200).send({
            message: ` ${name} reservado con exito, para ${date} `,
            event,
            ok: true
        })

    }catch(e){
        throw new Error(e)
    }

}
const listEvent = async(req,res)=>{
    try{

        const events = await Event.find()
        if(!events) {
            res.status(400).send({
                message: "no contamos con eventos por el momento"
            })
        }
        res.status(200).send({events})
    }catch(e){
        throw new Error(e)
    }

}
const editEvent = async(req,res)=>{
    try{
        const id = req.params.id
        const eventEdit = {...req.body}
        const eventComplete= await Event.findByIdAndUpdate(id, eventEdit, {new: true} )
        if(eventComplete){
            return res.status(200).send({
                message: 'se actualizaron los datos',
                 eventComplete
            })
        }
        res.status(400).send({
            message: 'ocurrio un error'
        })

    }catch(e){
        throw new Error(e)
    }


}
const deleteEvent = async(req,res)=>{
    try{
        const id = req.params.id
        const deleteEvent = await Event.findByIdAndDelete(id)
        res.status(200).send({
            message: 'evento cnacelado'
        })
    }catch(e){
        throw new Error (e)
    }
}
const addTypeEvent = async(req,res)=>{
    const {nameType, descriptionType} = req.body
    const id = req.params.id
    
    try{
        const eventeType = await Event.findByIdAndUpdate(
            id, 
            {
                $push: {
                    eventeType: {
                        nameType: nameType,
                        descriptionType: descriptionType
                    },
                },
            },
            {new: true}
        )
        if(!eventeType){
            return res.status(400).send({
                message: "evento no encontrado"
            })
        }
        return res.status(200).send({
            eventeType
        })

    }catch(e){
        throw new Error(e)
    }
}

const editTypeEvent = async(req,res)=>{
    const id = req.params.id
    const {idEventeType, nameType, descriptionType} = req.body
    
    try{
        const updateType = await Event.updateOne(
            {_id:id, "EventeType._id": idEventeType},
            {
                $set:{
                    "eventeType.$.nameType": nameType,
                    "eventeType.$.descriptiontype": descriptionType
                }
            },
            {new: true}
        )

        if(!updateType){
            return res.status(400).send({msg: "no existe este tipo de evento"})
        }
        res.status(200).send({updateType, msg:"tipo de evento editado correctamente"})

    }catch(e){
        throw new Error(e)
    }
}



const deleteType = async (req,res)=>{
    const id = req.params.id
    const {idEventeType} = req.body
    try{
        const deleteEventType = await Event.updateOne(
            { id },
            {
              $pull: { EventeType: { _id: idEventeType } },
            },
            { new: true, multi: false }
          );
      
          if (!deleteEventType) {
            return res.status(404).send({ msg: "no existe este envento" });
          }
      
          return res.status(200).send({ deleteEventType });
    }catch(e){
        throw new Error(e)
    }
}


module.exports = {
    createEvent,
    listEvent,
    addTypeEvent,
    deleteEvent, 
    editEvent,
    editTypeEvent, 
    deleteType,
    addTypeEvent, 
    
}