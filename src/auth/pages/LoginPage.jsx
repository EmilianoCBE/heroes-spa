import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = ( ) => {

    login('Elden')

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