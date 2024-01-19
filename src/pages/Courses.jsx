import React, { useEffect, useRef, useState } from "react";
import "../style/couses.css";

function Courses() {
  let course = useRef();
  let start = useRef();
  let duration = useRef();
  let teacher = useRef();
  let course_time_from = useRef();
  let course_time_to = useRef();
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
    // let ready_to_shoot = {
    //   course_name: course.current.value,
    //   start: start.current.value,
    //   duration: duration.current.value,
    //   teacher: teacher.current.value,
    //   course_time_from: course_time_from.current.value,
    //   course_time_to: course_time_to.current.value
    // }
    // fetch("https://nurcrmapi.pythonanywhere.com/couses/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(ready_to_shoot)
    // })
  }
  const [getusers, setGetUsers] = useState(null);
  const [filteredUser, setFilteredUser] = useState(null);
  useEffect(() => {
    async function getUsers() {
      let fetchData = await fetch("https://nurcrmapi.pythonanywhere.com/users/");
      let json = await fetchData.json();
      setGetUsers(json);
      let filtered_user_by_course = json.filter((item)=> item.course === selectedCourse)
      setFilteredUser(filtered_user_by_course)
    }
    getUsers()
  }, [selectedCourse]);
  
  function getUserByCourse(e) {
    e.preventDefault()
    let checkedUsers = document.querySelectorAll(".modal__card input[type=checkbox]:checked")
    for (let i = 0; i < filteredUser.length; i++) {
      console.log(filteredUser[i]);
      console.log(checkedUsers[i]);
      
    }
  }

  return (
    <div className="form__wrapper">
      <div className="form__modal" ref={modal}>
        <span className="X" onClick={closeModal}>
          X
        </span>
        <div className="modal__card">
          <form onSubmit={getUserByCourse}>
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
        <input id="start" type="date" ref={start}  />

        <label htmlFor="duration">Duration</label>
        <input id="duration" type="number" ref={duration}  />

        <label htmlFor="teacher">Teacher</label>
        <input id="teacher" type="text" ref={teacher}  />

        <label htmlFor="time_from">Course time from</label>
        <input id="time_from" type="time" ref={course_time_from}  />

        <label htmlFor="time_to">Course time to</label>
        <input id="time_to" type="time" ref={course_time_to}  />

        <br />
        <button onClick={openModal} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Courses;
