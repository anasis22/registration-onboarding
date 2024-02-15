import React from 'react'
import {useData} from "./DataContexts"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const {currentUser} = useData()
    console.log(currentUser);
  return (
   currentUser ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoute
