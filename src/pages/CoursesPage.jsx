import React, { useEffect, useState } from 'react'
import "../style/webdas.css"
import { useParams } from 'react-router-dom'
import NewUsers from '../components/NewUsers';

function CoursesPage() {
  let naviget = useParams()
  let user_id = naviget.userID
  const [getUsersFilter, setGetUsersFilter] = useState(null);
  useEffect(() => {

    getUsers()
  });
  async function getUsers() {
    let fetchData = await fetch("https://crmpanel-yle6.onrender.com/courses");
    let json = await fetchData.json();
    // console.log(json.id);
    let filteredUser = json.data.filter((item) => item._id === user_id)
    setGetUsersFilter(filteredUser);
    console.log(filteredUser);
  }
  return (
    <div className='web'>
    <NewUsers/>
    <div className="course_wrapper">
      {getUsersFilter && <div className='course_content'>
        
      <fieldset>
        <legend>Course name</legend>
    <h2>{getUsersFilter[0].course_name}</h2>
      </fieldset>
      <fieldset>
        <legend>Course month</legend>
    <h2>{getUsersFilter[0].course_month}</h2>
      </fieldset>
      <fieldset>
        <legend>Course time</legend>
    <h2>{getUsersFilter[0].course_time}</h2>
      </fieldset>
      <fieldset>
        <legend>Course price</legend>
    <h2>{getUsersFilter[0].course_price}</h2>
      </fieldset>
      <fieldset>
        <legend>Course teacher</legend>
    <h2>Umar Khidirboev</h2>
      </fieldset>
        </div>}
    </div>
  </div>
  )
}

export default CoursesPage