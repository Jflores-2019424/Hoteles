import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { login } from "../api/Api.login";
import { useState } from "react";


export const LoginPage = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const imprimir = async(e)=>{
    e.preventDefault()
    const result = await login(email, password)
    if (result) {
     
      
      Swal.fire({
          icon: 'success',
          title: "Genial",
          text: "Ha iniciado sesión correctamente",
          confirmButtonText: "Ok"
      }).then(r =>{
        if (r.isConfirmed) {
          navigate('/');
        } else {
          navigate('/');
        }
      });
      
  }
  }

  

  const onRegister = () =>{
    navigate('/register', {
      replace: true
    })
  }
 
  return (<>
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <input 
      value = {email}
      onChange={({target: {value}
      }) =>setEmail(value) }
      type="email" 
      placeholder="Email" 
      className="mb-1 form-control"
      id="email"
      required />
      <br />
      <input 
      value={password}
      onChange={({ target:{value} })=> setPassword(value) }
      type="password" 
      placeholder="Password" 
      className="mt-1 form-control"
      id="password" />
      <hr />

      <button 
        className="btn btn-primary me-3"
        onClick={ (e) => imprimir(e) }
      >
        Login
      </button>

      <button
        className="btn btn-primary me-3"
        onClick={ onRegister }
      >
        Register  
      </button>

    </div>
    </> )
}
