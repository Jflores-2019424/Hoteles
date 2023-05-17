import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
      replace: true
    });
  }

  const onRegister = () =>{
    navigate('/register', {
      replace: true
    })
  }
 
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <input type="text" placeholder="Email" className="mb-1" />
      <br />
      <input type="text" placeholder="Password" className="mt-1" />
      <hr />

      <button 
        className="btn btn-primary me-3"
        onClick={ onLogin }
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
  )
}
