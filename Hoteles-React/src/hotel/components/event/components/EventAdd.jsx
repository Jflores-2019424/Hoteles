import { useState } from "react";

import { createEvent } from "../api/Api.createEvent"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export const EventAdd = () =>{

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [guests,setGuests] = useState('')
    const [date,setDate] = useState('')
    const [nameType,setNameType] = useState('')
    const [descriptionType, setDescriptionType] = useState('')

    const imprimir = async(e)=>{
        e.preventDefault()

        const result = await createEvent(name, guests,date,nameType,descriptionType)
        if (result) {
            Swal.fire({
              icon: 'success',
              title: "Genial",
              text: "Se ha agendado el evento correctamente",
              confirmButtonText: "Ok"
            }).then((r) => {
              if (r.isConfirmed) {
                navigate('/eventos');
              } else {
                navigate('/eventos');
              }
            });
          } 

    }

    return(<>
            <div className="container mt-5">
              <h1>Agenda evento en nuestro hotel </h1>
              <hr />
        
              <input
                type="text"
                placeholder="Nombre del evento"
                className="form-control mb-3"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
              />
              <input
          type="number"
          placeholder="Numero de invitados"
          className="form-control mb-3"
          value={guests}
          onChange={(e)=>setGuests(e.target.value)}
        />
        
             
        <input
          type="date"
          placeholder="Fecha"
          className="form-control mb-3"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Tipo de evento"
          className="form-control mb-3"
          value={nameType}
          onChange={(e)=>setNameType(e.target.value)}
          
        />
         <div className="form-group">
    <textarea className="form-control" 
                cols="30" 
                rows="8" 
                maxLength="500"  
                placeholder= "Descripición"
                value={descriptionType}
                onChange={(e)=>setDescriptionType(e.target.value)}
                ></textarea>
        </div>
        
                <hr />
          
              <button className="btn btn-success p-3"onClick={imprimir} >
                agendar evento
              </button>
              
            </div>
            </> );
    
}