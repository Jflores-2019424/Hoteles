import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { listRoom } from "../api/Habitacion.api"
import hotelRoom from '../../../images/hotelRoom.jpg';


export const HabitacionesCard = () => {
      const [rooms, setRooms] = useState([])

      useEffect(() =>{
          const fetchData = async () =>{
            const result = await listRoom()
            setRooms(result)
          }

          fetchData()
      }, [])

    return(
        <div className="col animate__animated animate__fadeIn">
      {rooms.map((roomActual) =>(
      <div className="card mt-3" key={roomActual._id}>


        <div className="row no-gutters">
        <div className="col-12">
                <img src={hotelRoom} className="card-img"/>
            </div>
            <div className="col-12">
            
              <div className="card-body">
                <h5 className="card-title">NO. {roomActual.roomNumber}</h5>
                <p className="card-text">{roomActual.description}</p>
                <p className="card-text">Cuartos disponibles: {roomActual.availability}</p>
        
                <p className="card-text">
                    <small className="text-muted">{roomActual.price}</small>
                </p>

                 <Link to={`/habitacionPage`}>
                  Mas...
                 </Link>

              </div>

            </div>



        </div>

      </div>
      ))}
    </div>
    )
}