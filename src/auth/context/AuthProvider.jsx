import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user: user
  }
}

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState, init)

  

    const login = (name = '') => {
      const action = {
        type: types.login,
        payload: {
          id : 'ABC',
          name: name
        }
      }

      localStorage.setItem('user', JSON.stringify({
        id : 'ABC',
        name: name
      }))

      dispatch(action)
    }

    const logout = () => {
      localStorage.removeItem('user')

      const action = {
        type: types.logout,
      }

      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...state,
      login: login,
      logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider