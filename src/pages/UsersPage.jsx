import React  from 'react'
import { useEffect } from "react"
import { useState } from "react"
import "../style/usersPage.css"
import { NavLink } from 'react-router-dom'

function UsersPage() {
  const [user, setUser] = useState()
  useEffect(() => {
    getUsers()
  }, [])
  async function getUsers() {
    let fatchData = await fetch("https://crmpanel-yle6.onrender.com/users/")
    let json = await fatchData.json()
    setUser(json.data)
  }
  return (
    <div className='wrap'>
      <div className="container">
        {user?.map((item) => {
          return (
            <NavLink to={`/user/${item._id}`} className="child" key={item._id}>
              <p>{item.id}</p>
              <h4>{item.full_name}</h4>
              <h4>{item.contact}</h4>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default UsersPage