import React, { useEffect, useState } from 'react'
import "../style/course_user.css"
import { NavLink } from 'react-router-dom';


function CoursesUsers() {
  const [getusers, setGetUsers] = useState(null);
  useEffect(() => {

    getUsers()
  }, []);
  async function getUsers() {
    let fetchData = await fetch("https://crmpanel-yle6.onrender.com/courses");
    let json = await fetchData.json();
    setGetUsers(json.data);
    // console.log(json);
  }
  return (
    <div className='container'>
      <div className="big">
        <div className="qwe">
          <div className="header_course"  >
            <h3>Course name</h3>
            <h3>Month</h3>
            <h3>Time</h3>
            <h3>Price</h3>
          </div>
          
          <div className="daynemic">

            {getusers?.map((item) => {
              return (

                <NavLink to={`/webs/${item._id}`}>
                  <div className="map_user" key={item._id}>
                    <h4>{item.course_name}</h4>
                    <h4>{item.course_month}</h4>
                    <h4>{item.course_time}</h4>
                    <h4>{item.course_price}</h4>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


export default CoursesUsers