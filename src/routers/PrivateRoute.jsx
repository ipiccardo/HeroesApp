import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context'

export const PrivateRoute = ({children}) => {
  
    // SI ESTA AUTENTICADO O NO MUESTRA A LOS HIJOS
    const {logged} = useContext(AuthContext)
  
  
    return (logged) ? children : <Navigate to='/login' />

}
