import React, { useRef } from 'react'
import "../style/form.css"

function QabulPage() {
  // const [phone1, setPhone] = useState('');
  let full_name = useRef()
  let phone = useRef()
  // let course = useRef()
  // let reception_time = useRef()
  function handlClick (e) {
    e.preventDefault()
    let ready_to_push = {

      full_name: full_name.current.value,
      contact: phone.current.value,
     
    }
    console.log(ready_to_push);
      fetch("https://crmpanel-yle6.onrender.com/users/register/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready_to_push)
    })
  }
  return (
    <div className='wrapper'>
    <form className='form' onSubmit={handlClick}>
        <div className="card">
            <h3 className='title'>REGISTER</h3>                  
        </div>
        <label htmlFor="name">
        <i className="fa-solid fa-user"></i>
            Name</label>
        <input ref={full_name} id='name' type="text" placeholder='F.I.O'required />

        <label htmlFor="phone">
        <i className="fa-solid fa-phone"></i>
        Phone</label>
      
        <input ref={phone} id='phone' type="tel" placeholder='Telephone' required/>

        {/* <label htmlFor="kurs"><i className="fa-solid fa-list"></i>Kurs</label>
        <select ref={course} name="kurs" >
            <optgroup label='Choose Kurs' >
                <option value="Frontend" >Frontend</option>
                <option value="Backend" >Backend</option>
                <option value="Grafik_dizayn">Grafik dizayn</option>
                <option value="Web_dizayn">Web dizayn</option>
            </optgroup>
        </select>
        <label htmlFor="data"><i className="fa-solid fa-calendar-days"></i>Date</label>
        <input ref={reception_time}  type="date" required/>  */}<br />
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default QabulPage