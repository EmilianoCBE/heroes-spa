import { useNavigate } from "react-router-dom"

const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = ( ) => {
    navigate('/', {
      //Reemplaza el historial
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
        className="btn btn-primar"
        onClick={onLogin}  
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage