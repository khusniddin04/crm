import React, { useEffect, useRef, useState } from "react";
import "../style/couses.css";

function Courses() {
  let course = useRef();
  // let start = useRef();
  let course_month = useRef();
  let course_price = useRef();
  let course_time = useRef();
  let modal = useRef();
  // const[selectedCourse, setSelectedCourse]=useState("")
  function openModal() {
    modal.current.classList.add("openModal");
  }

  function closeModal() {
    modal.current.classList.remove("openModal");
  }

  function getUserInfo(e) {
    modal.current.classList.add("openModal");
    e.preventDefault();
    // setSelectedCourse(course.current.value)
    // let ready_to_shoot = {
    //   course_name: course.current.value,
    //   start: start.current.value,
    //   course_month: course_month.current.value,
    //   course_price: course_price.current.value,
    //   course_time: course_time_from.current.value,
    // }
    // fetch("https://crmpanel-yle6.onrender.com/courses/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(ready_to_shoot)
    // })
  }
  const [getusers, setGetUsers] = useState(null);
  // const [filteredUser, setFilteredUser] = useState(null);
  useEffect(() => {
    
    getUsers()
  }, []);
  async function getUsers() {
      let fetchData = await fetch("https://crmpanel-yle6.onrender.com/users/");
      let json = await fetchData.json();
      setGetUsers(json.data);
      // let filtered_user_by_course = json.filter((item)=> item.course === selectedCourse)
      // setFilteredUser(filtered_user_by_course)
    }
  // function getUserByCourse(e) {
  //   e.preventDefault()
  //   let checkedUsers = document.querySelectorAll(".modal__card input[type=checkbox]:checked")
  //   for (let i = 0; i < filteredUser.length; i++) {
  //     console.log(filteredUser[i]);
  //     console.log(checkedUsers[i]);
      
  //   }
  // }

  return (
    <div className="form__wrapper">
      <div className="form__modal" ref={modal}>
        <span className="X" onClick={closeModal}>
          X
        </span>
        <div className="modal__card">
          <form  >
            {getusers?.map((item) => {
              return (
                <div key={item.courses_ref_id} >
                  <h5>{item?.full_name}</h5>
                  <h5>{item?.contact}</h5>
                 
                  <input id={item.id}  type="checkbox" />
                </div>
              );
            })}
            <button type="submit">Create Course</button>
          </form>
        </div>
      </div>
      <form className="form1" onSubmit={getUserInfo}>
        <div className="card2">
          <h3 className="title">CREATE COURSES</h3>
        </div>

        <label htmlFor="name">Course Name</label>
        <select ref={course} name="kurs" >
          <optgroup label="Choose Kurs">
            <option value="front">Frontend</option>
            <option value="back">Backend</option>
            <option value="gr">Grafik dizayn</option>
            <option value="wg">Web dizayn</option>
          </optgroup>
        </select>
        {/* <input id='name' type="text" ref={course_name} placeholder='Course Name'required /> */}
        <br />
        {/* <label htmlFor="start">Start</label>
        <input id="start" type="date" ref={start}  /> */}

        <label htmlFor="course_month">Course month</label>
        <input id="course_month" type="number"  ref={course_month}  />

        <label htmlFor="course_price">Course price</label>
        <input id="course_price" type="number" ref={course_price}  />

        <label htmlFor="course_time">Course time </label>
        <input id="course_time" type="time" placeholder="Time" ref={course_time}  />

        
        <br />
        <button onClick={openModal} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Courses;
