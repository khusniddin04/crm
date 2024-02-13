import React, { useEffect, useRef, useState } from "react";
import "../style/couses.css";

function Courses() {
  let course = useRef();
  let course_time = useRef();
  let course_month = useRef();
  let course_price = useRef();
  // let course_time_from = useRef();
  // let course_time_to = useRef();
  // let studetns = useRef();
  let modal = useRef();
  const[selectedCourse, setSelectedCourse]=useState("")
  function openModal() {
    modal.current.classList.add("openModal");
  }

  function closeModal() {
    modal.current.classList.remove("openModal");
  }

  function getUserInfo(e) {
    modal.current.classList.add("openModal");
    e.preventDefault();
    setSelectedCourse(course.current.value)
    let ready_to_shoot = {
      course_name: course.current.value,
      course_time: course_time.current.value,
      course_month: course_month.current.value,
      course_price: course_price.current.value,
      // course_time_from: course_time_from.current.value,
      // course_time_to: course_time_to.current.value,
      // studetns: chackedUser,

    }
    fetch("https://crmpanel-yle6.onrender.com/courses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready_to_shoot)
    })
  }
  const [getusers, setGetUsers] = useState(null);
  const [filteredUser, setFilteredUser] = useState(null);
  // const [chackedUser, setCheckedUser] = useState(null)
  useEffect(() => {
    async function getUsers() {
      let fetchData = await fetch("https://crmpanel-yle6.onrender.com/courses");
      let json = await fetchData.json();
      setGetUsers(json);
      // let filtered_user_by_course = json.filter((item)=> item.course === selectedCourse)
      // setFilteredUser(filtered_user_by_course)
    }
    getUsers()
  }, [selectedCourse]);
  
  // function getUserByCourse(e) {
  //   e.preventDefault()
  //   setCheckedUser = document.querySelectorAll(".modal__card input[type=checkbox]:checked")
  //   console.log(setCheckedUser);
  // //   for (let i = 0; i < filteredUser.length; i++) {
      
  // //   }
  // }

  return (
    <div className="form__wrapper">
      <div className="form__modal" ref={modal}>
        <span className="X" onClick={closeModal}>
          X
        </span>
        <div className="modal__card">
          <form >
            {filteredUser?.map((item) => {
              return (
                <div key={item.id} id={item.id}>
                  <h5>{item?.full_name}</h5>
                  <h5>{item?.course}</h5>
                  <p>{item?.phone}</p>
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
        <label htmlFor="start">Start</label>
        <input id="start" type="date" ref={course_time}  />

        <label htmlFor="duration">Duration</label>
        <input id="duration" type="number" ref={course_month}  />

        <label htmlFor="teacher">Teacher</label>
        <input id="teacher" type="text" ref={course_price}  />

        {/* <label htmlFor="time_from">Course time from</label>
        <input id="time_from" type="time" ref={course_time_from}  />

        <label htmlFor="time_to">Course time to</label>
        <input id="time_to" type="time" ref={course_time_to}  /> */}

        <br />
        <button onClick={openModal} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Courses;
