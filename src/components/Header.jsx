import React from 'react'
import "../style/header.css"
import { NavLink, useLocation } from 'react-router-dom'
import logo from "../image/logo2-removebg-preview.png"
function Header({}) {
  let location = useLocation()
  return (
    <header className="header">
      <div className="container">
        <nav className='header__nav'>
          <ul className='ul_list'>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/users">USERS</NavLink>
            </li>
            <li>
              {/* <NavLink to="/webs">webS</NavLink> */}
            </li>
          </ul>
          <div data-aos="fade-down">
            
            <NavLink  className='logo'>
            <img className='logo_img'  src={logo} alt="logo" />
          </NavLink>
          </div>

         
          
          <ul>
            <li className='nav__list'>
              <NavLink to="/create-course">COURSES +</NavLink> 

            </li>
            <li className='nav__list'>
            <NavLink to="/register">REGISTER</NavLink>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header