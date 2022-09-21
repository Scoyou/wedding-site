import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return(
    <div className="root">
      <div className="nav">
        <Link to="/gallery" className="nav-item">Gallery</Link>
        <Link to="/" className="nav-item">Home</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Root