import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { createUser } from "../api/Api.createUser";
import Swal from 'sweetalert2';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [lenguage, setLenguage] = useState('');
  const [contry, setContry] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [telefono, setTelefono] = useState('');

  const imprimir = async (e) => {
    e.preventDefault();
  
    const result = await createUser(name, lastName, birthday, contry, telefono, lenguage, email, password);
    
    if (result) {
      Swal.fire({
        icon: 'success',
        title: "Genial",
        text: "Se ha creado el usuario correctamente",
        confirmButtonText: "Ok"
      }).then((r) => {
        if (r.isConfirmed) {
          navigate('/');
        } else {
          navigate('/');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: "Error",
        text: "No se pudo crear el usuario",
        confirmButtonText: "Ok"
      });
    }
  };
    
  const onLogin = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Registrarse</h1>
      <hr />

      <input
        type="text"
        placeholder="Nombres"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
  type="text"
  placeholder="Apellidos"
  className="form-control"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/>
<input
        type="text"
        placeholder="idoma"
        className="form-control"
        value={lenguage}
        onChange={(e) => setLenguage(e.target.value)}
      />
      <input
  type="text"
  placeholder="pais"
  className="form-control"
  value={contry}
  onChange={(e) => setContry(e.target.value)}
/>

<input
  type="email"
  placeholder="Email"
  className="form-control"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  placeholder="Pasword"
  className="form-control"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<input
  type="date"
  placeholder="Fecha"
  className="form-control"
  value={birthday}
  onChange={(e) => setBirthday(e.target.value)}
/>

<input
  type="number"
  placeholder="Telefono"
  className="form-control"
  value={telefono}
  onChange={(e) => setTelefono(e.target.value)}
/>

        <hr />
  
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
      <button className="btn btn-primary" onClick={imprimir}>
        Registrarse
      </button>
    </div>
  );
}
