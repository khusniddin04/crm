import React, { useEffect, useRef, useState } from "react";
import "../style/form.css";
import { useNavigate } from "react-router-dom";

function QabulPage() {
  let navigation = useNavigate();

  let full_name = useRef();
  let phone = useRef();
  let courses_ref_id = useRef();

  const[getcourses, setGetCourses] = useState(null)

function handleClick(e) {
    e.preventDefault();
    let ready_to_push = {
      full_name: full_name.current.value,
      contact: phone.current.value,
      courses_ref_id: courses_ref_id.current.value
    };
    fetch("https://crmpanel-yle6.onrender.com/users/register/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ready_to_push),
    });
    let path = "/lids";
    navigation(path);
}
useEffect(()=> {
  getCourses()
}, [])

async function getCourses() {
  let fetchCourses = await fetch("https://crmpanel-yle6.onrender.com/courses/")
  let json = await fetchCourses.json()
  setGetCourses(json.data)
}
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleClick}>
        <div className="card">
          <h3 className="title">REGISTER</h3>
        </div>

        <label htmlFor="name">
          <i className="fa-solid fa-user"></i>Name
        </label>
        <input ref={full_name} id="name" type="text" placeholder="F.I.O" required />

        <label htmlFor="phone">
          <i className="fa-solid fa-phone"></i>Phone
        </label>
        <input ref={phone} id="phone" type="tel" placeholder="Telephone" required/>

        <br />
        
        <label htmlFor="choose_courses">Choose Courses</label>
        <select id="courses" ref={courses_ref_id} >
          <optgroup label="Choose Courses">
            {getcourses?.map((item) => {
              return (
                <option key={item._id} value={item._id}>{item.course_name}</option>
              )
            })}
          </optgroup>
        </select>
      
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QabulPage;
