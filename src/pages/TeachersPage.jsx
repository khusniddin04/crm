import React, { useState } from 'react'
import "../style/teachers.css"
import { IoEllipsisVertical } from "react-icons/io5";
import "../style/form.css"

function TeachersPage() {
  const [modal, setModal] = useState(false);

function openModal () {
    setModal(true)
}
function closeModal () {
    setModal(false)
}
  return (
    <main className='container'>
      <div className="uqtuvchi">
        <div className="miqdor">
          <h1>O'qtuvchilar</h1>
          <p>Miqdori - 1</p>
        </div>
        <button onClick={openModal}>Yangisini qo'shish</button>
      </div>
      <div className="teach_wrapper">
        <div className="teach_content">
          <h4>Umar Khidirbayev</h4>
          <h5>+9989383789347</h5>
          <h6>7 guruhlar</h6>
          <p><IoEllipsisVertical /></p>
        </div>
        <div className="teach_content">
          <h4>Umar Khidirbayev</h4>
          <h5>+9989383789347</h5>
          <h6>7 guruhlar</h6>
          <p><IoEllipsisVertical /></p>
        </div>
        <div className="teach_content">
          <h4>Umar Khidirbayev</h4>
          <h5>+9989383789347</h5>
          <h6>7 guruhlar</h6>
          <p><IoEllipsisVertical /></p>
        </div>
        <div className="teach_content">
          <h4>Umar Khidirbayev</h4>
          <h5>+9989383789347</h5>
          <h6>7 guruhlar</h6>
          <p><IoEllipsisVertical /></p>
        </div>

      </div>
     {modal && <div className="wrapper">
      <div className="modal">
      <form className='form' >
        <div className="card">
            <h3 className='title'>O'qtuvchi</h3> 
            <h4 onClick={closeModal}>X</h4>                 
        </div>
        <label htmlFor="name"> Name</label>
        <input  id='name' type="text" placeholder='F.I.O'required />

        <label htmlFor="phone">Phone</label>
        <input id='phone' type="number" placeholder='Telephone' required/>

       <br />
        <button type='submit'>Submit</button>
    </form>
      </div>
      </div>}
      
    </main>
  )
}

export default TeachersPage