import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../api/Api.searchById";
import Swal from "sweetalert2";
import { deleteEvent } from "../api/Api,deleteEvent";

export const EventPages = () => {
  const { id } = useParams();
  const events = useMemo(() => getEventById(id), [id]);

  const navigate = useNavigate();

  const imprimir = async(e)=>{
    e.preventDefault()

    const result = await deleteEvent(id)
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
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!events) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card mt-3">
          <div className="row no-gutters ">
            <div className="col-8 ">
              <div className="card-body  text-center ">
                <h5 className="card-title">fiesta de cumpleaños</h5>
                <p className="card-text">Fecha de reservación: 01/06/2023</p>
                <p className="card-text">invitados: 100</p>
                <p>tipo de evento: social</p>
                <p>descripcion:</p>
                <p>es un evento de relaciones sociales que se llevara a cabo en las instalaciones de hotel</p>
                <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                  Back
                </button>
                <button className="btn btn-outline-danger ms-3 " onClick={imprimir}>
                  eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
