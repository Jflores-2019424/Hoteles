import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getRoomById } from "../api/getRoomById";
import { useMemo } from "react";
import hotelRoom from '../../../images/hotelRoom.jpg';

export const HabitacionPage = () =>{
    const { id } = useParams
    const rooms = useMemo(() => getRoomById(id), [id])

    const navigate = useNavigate();

    const onNavigateBack = () =>{
        navigate(-1)
    }
    if(!rooms) {
        return <Navigate to="/"/>;
    }
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img src={hotelRoom} className="img-thumbnail border border-black"/>
            </div>
            <div className="col-8">
                <h3>NO. Habitacion</h3>
                <ul>
                    <li className="list-group-item">datos</li>
                    <li className="list-group-item">informacion</li>
                    <li className="list-group-item">descripcion</li>
                </ul>

                <h5 className="mt-3"> subtitulo </h5>
                <p>Descripcion extensa</p>

                <button 
                className="btn btn-outline-primary"
                onClick={ onNavigateBack }
                >
                    Regresar
                </button>

            </div>
        </div>     
    )
}