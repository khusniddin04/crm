import React, { useEffect, useState } from 'react'
import "../style/usersPage.css"

function UsersPage() {
  const [user, setUser] = useState()
  useEffect(() => {
    getUsers()
  }, [])
  async function getUsers() {
    let fatchData = await fetch("https://crmpanel-yle6.onrender.com/users/")
    let json = await fatchData.json()
    setUser(json.data)
    console.log(json);
  }
  return (
    <div className='wrap'>
      <div className="container">
        {user?.map((item) => {
          return (
            <div className="child" key={item.courses_ref_id}>
              <p>{item.id}</p>
              <h4>{item.full_name}</h4>
              <h4>{item.contact}</h4>
              
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UsersPage