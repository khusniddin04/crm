import React, { useEffect, useRef, useState } from 'react'
import "../style/user.css"
import user from "../image/user-image-removebg-preview.png"
import {  useParams } from 'react-router-dom';
import { MdGroupAdd } from "react-icons/md";
import { MdAttachMoney, MdDeleteOutline } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
function UserPage() {
    let modal2 = useRef()
    let location = useParams()
  function  handleDelete() {
        fetch('https://crmpanel-yle6.onrender.com/users/id/', {
          method: 'DELETE'
        })
    }
    const[filteredstudent, setFilteredStudent] = useState(null)
useEffect(() => {
    getStudent()
})
    async function getStudent() {
        let fetchData = await fetch("https://crmpanel-yle6.onrender.com/users/")
        let json = await fetchData.json()
        let road = json.data
        let filtered_user = road?.filter((item)=> item._id === location.userID  )
        setFilteredStudent(filtered_user)
}

    function openMoney() {
        modal2.current.classList.add("open");
    }
    function closeMoney() {
        modal2.current.classList.remove("open")
    }
  return (
    <main className='student'>
     <div className="container">
            <div className="student__wrapper">
                <div className="student__info">
                    {filteredstudent && <div className='student_info'>
                    <img src={user} alt="user" />
                        <h2>{filteredstudent[0].full_name}</h2>
                        <p>({filteredstudent[0]._id})</p>
                        <h5>{filteredstudent[0].create_at}</h5>

                        <button className='student_btn'>0 UZS</button> <span>balans</span>
                        <p className='info_text'>Telefon:</p>
                        <h4>{filteredstudent[0].contact}</h4>
                        <div className="info__btns">
                        <button><MdGroupAdd  size="15px"/>Guruhga qo'shish</button>
                        <button className='tolov' onClick={openMoney} type="submit"><MdAttachMoney  size="15px" />To'lov</button>
                    </div>
                    </div>
                    }
                    <div className="edit">
                        <button><LuPencil className='edit_btn1' /></button> 
                        <button onClick={handleDelete} type='submit'><MdDeleteOutline className='edit_btn2' /></button> 
                    </div>
                </div>
                <div className="student__info2">
                    <ul>
                        <li>Guruhlar</li>
                        <li>Izohlar</li>
                        <li>Qo'ng'iroq tarixi</li>
                        <li>SMS</li>
                        <li>Tarix</li>
                    </ul>
                    <div className="info2__wrapper">
                        <div className="info2__cards">
                        </div>
                        <div className="info2__cards">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal2__wrapper"  ref={modal2}>
                <div className="modal2">
                <div className="modal2__content">
                    <h4>To'lov</h4>
                    <button onClick={closeMoney} type='submit'>x</button>
                </div>
                <h4 className='modal2__title'>Student</h4>
                {filteredstudent && <div className='full_name'> 
                    <h4>{filteredstudent[0].full_name}</h4>
                </div>}
                <div className="balans">
                    <h4>Balans</h4>
                    <button className='student_btn'>0 UZS</button>
                </div>

            </div>
            </div>
            
        </div>
    </main>
  )
}

export default UserPage