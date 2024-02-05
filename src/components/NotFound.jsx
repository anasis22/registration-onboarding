import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h2>404 Page Not Found</h2>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default NotFound
