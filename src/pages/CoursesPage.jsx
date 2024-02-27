import React, { useEffect,  useState, useRef } from 'react'
import "../style/webdas.css"
import { useParams } from 'react-router-dom'
import NewUsers from '../components/NewUsers';
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";



function CoursesPage() {
  let naviget = useParams()
  let user_id = naviget.userID
  let id = naviget.userID.user_id
  const [getUsersFilter, setGetUsersFilter] = useState(null);
  const [modal, setModal] = useState(false)

  
  useEffect(() => {

    getUsers()
  });
  async function getUsers() {
    let fetchData = await fetch("https://crmpanel-yle6.onrender.com/courses");
    let json = await fetchData.json();
    let filteredUser = json.data.filter((item) => item._id === user_id)
    setGetUsersFilter(filteredUser);
  }
  async function hendlDelete (){
     console.log(user_id);
      fetch(" https://crmpanel-yle6.onrender.com/courses/id" + user_id, {
        method: "DELETE"
      })
    }
    function openModal () {
      setModal(true)
    }
    function closeModal () {
      setModal(false)
    }
    let course = useRef();
  let course_month = useRef();
  let course_price = useRef();
  let course_time = useRef();
  function getUserInfo(e) {
    e.preventDefault();

    let ready_to_shoot = {
      course_name: course.current.value,
      course_month: course_month.current.value,
      course_price: course_price.current.value,
      course_time: course_time.current.value,
    }
    fetch("https://crmpanel-yle6.onrender.com/courses/id" + user_id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready_to_shoot)
    })
  }
  
  return (
    <div className="title">
     {modal && <div className="modals">
    
      <form className="form1" onSubmit={getUserInfo}>
        <div className="card2">
          <h3 className="title">CREATE COURSES</h3>
          <h3 onClick={closeModal}>X</h3>
        </div>

        <label htmlFor="name">Course Name</label>
        <select ref={course} name="kurs" >
          <optgroup label="Choose Kurs">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Grafik_dizayn">Grafik dizayn</option>
            <option value="Web_dizayn">Web dizayn</option>
          </optgroup>
        </select>
       

        <label htmlFor="course_month">Course month</label>
        <input id="course_month" type="number"  ref={course_month}  />

        <label htmlFor="course_price">Course price</label>
        <input id="course_price" type="number" ref={course_price}  />

        <label htmlFor="course_time">Course time </label>
        <input id="course_time" type="time" placeholder="Time" ref={course_time}  />


        
        <br />
        <button  type="submit">Submit</button>
      </form>
      
     </div>}
      <div className='web'>
        <div className="course_wrapper">
          {getUsersFilter && <div className='course_content'>
            <h3>  <span>{getUsersFilter[0].course_name}:</span>  Umar Khidirboev</h3>
            <h3>  <span>Kurs davomiyligi:</span>  {getUsersFilter[0].course_month}-oy</h3>
            <h3><span>Kurs narxi: </span>  {getUsersFilter[0].course_price}  UZS</h3>
            <h3> <span>Boshlanish vaqt:</span>  {getUsersFilter[0].course_time}</h3>
          </div>}

            <div className="icons">
            <GoPencil className='icons_one' onClick={openModal} />
            <MdDeleteOutline className='icons_one' onClick={ hendlDelete}/>
            </div>
        </div>
            <hr />
        <NewUsers />
      </div>

      <div className="curs_davomoti">
        <h4>Davomat</h4>
      <div className="davomot">

      </div>
      </div>
    </div>
  )
}

export default CoursesPage