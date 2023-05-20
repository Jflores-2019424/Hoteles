import { useNavigate } from "react-router-dom"


export const EventPage = () =>{
    const navigate = useNavigate();

    const onNavigateBack = () =>{
        navigate(-1)
    }
    return(
        <div className="row mt-5">
            <div className="col-8">
                <h3>Event Name</h3>
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