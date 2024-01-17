import React, { useRef } from 'react'
import "../style/couses.css"

function Courses() {
    let course_name = useRef()
    let start = useRef()
    let duration = useRef()
    let teacher = useRef()
    let course_time_from = useRef()
    let course_time_to = useRef()

    function getUserInfo(e) {
        e.preventDefault()
        let ready_to_shoot = {
          course_name: course_name.current.value,
          start: start.current.value,
          duration: duration.current.value,
          teacher: teacher.current.value,
          course_time_from: course_time_from.current.value,
          course_time_to: course_time_to.current.value
        }
        fetch("https://nurcrmapi.pythonanywhere.com/couses/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(ready_to_shoot)
        })
    }
  return (
    <div className='form__wrapper'>
    <form className='form1' onSubmit={getUserInfo}>
        <div className="card2">
            <h3 className='title'>CREATE COURSES</h3>                  
        </div>

        <label htmlFor="name">Course Name</label>
        <input id='name' type="text" ref={course_name} placeholder='Course Name'required />
        <br />
        <label htmlFor="start">Start</label>
        <input id='start' type="date" ref={start} required/>

        <label htmlFor="duration">Duration</label>
        <input id='duration' type="number" ref={duration} required/>

        <label htmlFor="teacher">Teacher</label>
        <input id='teacher' type="text" ref={teacher} required/>

        <label htmlFor="time_from">Course time from</label>
        <input id='time_from' type="date" ref={course_time_from} required/>

        <label htmlFor="time_to">Course time to</label>
        <input id='time_to' type="date" ref={course_time_to} required/>

        <br />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Courses