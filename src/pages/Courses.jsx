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
        <input id='time_from' type="time" ref={course_time_from} required/>

        <label htmlFor="time_to">Course time to</label>
        <input id='time_to' type="time" ref={course_time_to} required/>

        <br />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Courses