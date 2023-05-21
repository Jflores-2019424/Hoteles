import { useNavigate } from "react-router-dom"


export const HabitacionPage = () =>{
    const navigate = useNavigate();

    const onNavigateBack = () =>{
        navigate(-1)
    }
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img src=""/>
                <h3>Imagen, este texto se borra despues</h3>
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