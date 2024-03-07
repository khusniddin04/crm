import React, {  useRef } from "react";
import "../style/couses.css";

function Courses() {
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
    fetch("https://crmpanel-yle6.onrender.com/courses/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready_to_shoot)
    })
  }
  
  return (
    <div className="form__wrapper">
     
      <form className="form1" onSubmit={getUserInfo}>
        <div className="card2">
          <h3 className="title">CREATE COURSES</h3>
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
    </div>
  );
}

export default Courses
