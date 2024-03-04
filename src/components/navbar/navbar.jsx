import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar (prop) {
  return (
    <header className='navbar_container'>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <div className="nav_links">
          <Link to="/">Home</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/about">about</Link>
          <Link to="/">Gallery</Link>
        </div>
    </header>
  )
}

