import { useEffect, useState } from 'react'
import "../style/course_user.css"
import img1 from "../image/user-solid.svg"

function NewUsers() {
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
    <div>
      <div className="dior">
        <div className="fixed">

          <div className="rio" >
            <i>Full name</i>
            <i>Phone</i>
          </div>
        </div>
        <div className="map" >

          {user?.map((prev) => {
            return (
              <div className='one' key={prev.courses_ref_id}>
                <h3><img src={img1} alt="" />{prev.full_name}</h3>
                <h3>{prev.contact}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewUsers