import React from 'react'
import {useData} from "./DataContexts"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const {currentUser} = useData()
  return (
   currentUser ? <Outlet /> : <Navigate to='/Login'/>
  )
}

export default PrivateRoute
