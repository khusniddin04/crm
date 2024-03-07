import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/usersPage.css";
import { NavLink } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import "../style/lid.css"
import { useRef } from "react";
function Lid() {
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false)
  // const [filter, setFilter] = useState(null)
  let full_name = useRef()
  let contact = useRef()

function openEditModal(e) {
    setModal(true)
    // let user_id = e.target.parentElement.parentElement.parentElement.id
    // let filteredUsers = user?.find((item)=> item?._id === user_id)
    // full_name.current.value = filteredUsers.full_name
    // contact.current.value = filteredUsers.contact
    // console.log(filteredUsers);    
}
function EditUser(e) {
  let user_id = e.target.parentElement.id
  console.log(user_id);
    e.preventDefault()
    let ready_to_upd = {
      full_name: full_name.current.value,
      contact: contact.current.value,
    };
    fetch(`https://crmpanel-yle6.onrender.com/users/${user_id}/`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(ready_to_upd),
    });
    closeEditModal()
}
function closeEditModal() {
    setModal(false)
}

function DeleteUser(e) {
  let user_id = e.target.parentElement.parentElement.parentElement.id
  fetch(`https://crmpanel-yle6.onrender.com/users/${user_id}/`, {
    method: "DELETE",
  });
}

useEffect(() => {
    getUsers();
}, []);
async function getUsers() {
    let fatchData = await fetch("https://crmpanel-yle6.onrender.com/users/");
    let json = await fatchData.json();
    setUser(json.data);
}


  return (
    <main className="lids">
      <div className="container">
        <div className="lids__top">
          <h2>Qabuldagilar</h2>
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className="lids__grid">
          <div className="lids__users">
            {user?.map((item) => {
              return (
                <div className="child" id={item?._id} key={item?._id}>
                  <div className="child__fullname">
                    <h4>{item?.full_name}</h4>
                  </div>
                  <div className="child__contact">
                    <h4>{item?.contact}</h4>
                  </div>
                  <div className="child__cta">
                    <button className="cta__btn1" onClick={openEditModal} ><LuPencil size="20px" /> </button>
                    <button className="cta__btn2" onClick={DeleteUser}> <MdDeleteOutline size="20px" /> </button>
                  </div>
                  {modal && <form onSubmit={EditUser} className="lid__modal">
                  <div className="overlay"></div>
                  <div className="lids_modal__content">
                    <button onClick={closeEditModal} className="closeModal">X</button>
                    <h4>Edit User</h4>
                    <label htmlFor="name">Name</label>
                    <input ref={full_name} type="text" id="name" />
                    <br />
                    <label htmlFor="contact">Contact</label>
                    <input ref={contact} type="number" id="contact" />
                    <br />
                    <button type="submit">Submit</button>
                  </div>
              </form>} 
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
    </main>
  );
}

export default Lid;
