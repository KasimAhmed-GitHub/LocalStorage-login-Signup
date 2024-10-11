import React from 'react'
// import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const auth = localStorage.getItem("Loggin")
  return auth ? children : <Navigate to="/login" />
}
export default ProtectedRoutes