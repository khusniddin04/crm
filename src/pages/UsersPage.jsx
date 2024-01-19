import React, { useEffect, useState } from 'react'
import "../style/usersPage.css"

function UsersPage() {
  const [user, setUser] = useState()
  useEffect(() => {
    getUsers()
  }, [])
  async function getUsers() {
    let fatchData = await fetch("https://nurcrmapi.pythonanywhere.com/users/")
    let json = await fatchData.json()
    setUser(json)
    console.log(json);
  }
  return (
    <div className='wrap'>
      <div className="container">
        {user?.map((item) => {
          return (
            <div className="child">
              <p>{item.id}</p>
              <h4>{item.full_name}</h4>
              <h4>{item.phone}</h4>
              <h5>{item.course}</h5>
              <p>{item.reception_time}</p>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UsersPage