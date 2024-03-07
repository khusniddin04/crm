import React from 'react'
import "../style/header.css"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
    <div className="container">
      <nav className='header__nav'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lids">Lidlar</NavLink>
          </li>
          <li>
            <NavLink to="/teachers">O'qituvchilar</NavLink>
          </li>
          <li>
            <NavLink to="/about">Guruhlar</NavLink>
          </li>
          <li>
            <NavLink to="/users">Students</NavLink>
          </li>
          <li>
            <NavLink to="/finance">Moliya</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  )
}

export default Header