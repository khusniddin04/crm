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
    <main className='lids'>
      <div className="container">
        <div className="lids__top">
          <h2>Qabuldagilar</h2>
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className="lids__grid">
            <div className="lids__users">
          {user?.map((item) => {
               return (
                <NavLink to={`/user/${item._id}`} className="child" key={item._id}>
                  <div className="child__fullname">
                  <h4>{item.full_name}</h4>
                  </div>
                  <div className="child__contact">
                  <h4>{item.contact}</h4>
                  </div>
              </NavLink>
             )
          })}
            </div>
        </div>
       
      </div>
      
    </main>
  )
}

export default UsersPage