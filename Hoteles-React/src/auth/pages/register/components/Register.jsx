import { useNavigate } from "react-router-dom";

export const Register = () =>{

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/',{
        replace: true
        });
    }
    return(
        <div className="container mt-5">
        <h1>Registrarse</h1>
        <hr />

        <input type="text" placeholder="Nombres" className="form-control" />
        <input type="text" placeholder="Apellidos" className="form-control" />

        <input type="email" placeholder="Email" className="form-control"/>

        <input type="password" placeholder="Pasword" className="form-control"/>

        <input type="date" placeholder="Fecha" className="form-control"/>

        <input type="tel" placeholder="telefono" className="form-control"/>

        <hr />
        <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
        </div>
    )
}