import React from 'react'
import "../style/header.css"
import { NavLink } from 'react-router-dom'
import logo from "../image/logo2-removebg-preview.png"
function Header() {
  return (
    <header className='header'>
      <div className="container">
        <nav className='header__nav'>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
          </ul>
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
          
          <ul>
            <li className='nav__list'>
              <NavLink to="/qabul">QABUL</NavLink>
              <NavLink to="/qabul">REGISTOR</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header