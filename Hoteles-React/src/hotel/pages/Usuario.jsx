import user from '../images/user.png'

export const Usuario = () => {
  return (
    <div className='row mt-5'>
      <h1>Usuario</h1>
      <hr />
        <div className="col-4">
          <img src={user} className='img-thumbnail border border-dark'/>
        </div>
        <div className='col-8'>
          <h3>Username</h3>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Nombre</li>
              <li className='list-group-item'>Correo</li>
              <li className='list-group-item'>Telefonos</li>
              <li className='list-group-item'>Fecha de nacimiento</li>              
          </ul>
        </div>
    </div>
  )
}
