import { Link } from "react-router-dom"


export const EventCard = () => {
    return(
        <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">

            <div className="col-8">

              <div className="card-body">
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">Descripcion</p>

                {
                 
                }
        
                <p className="card-text">
                    <small className="text-muted"></small>
                </p>

                 <Link>
                  Mas...
                 </Link>

              </div>

            </div>



        </div>

      </div>
    </div>
    )
}