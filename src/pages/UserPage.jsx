import React, { useEffect, useRef, useState } from "react";
import "../style/user.css";
import user from "../image/user-image-removebg-preview.png";
import { useNavigate, useParams } from "react-router-dom";
import { MdGroupAdd } from "react-icons/md";
import { MdAttachMoney, MdDeleteOutline } from "react-icons/md";
import { LuPencil } from "react-icons/lu";

function UserPage() {
  let navigation = useNavigate()

  let modal2 = useRef();
  let location = useParams();
  let full_name = useRef();
  let phone = useRef();
  let student_modal = useRef();

  const [filteredstudent, setFilteredStudent] = useState(null);

// These three functions edit the user and open a modal window
function handleEdit() {
    student_modal.current.classList.add("student__modal__open");
    full_name.current.value = filteredstudent[0].full_name;
    phone.current.value = filteredstudent[0].contact;
}
function closeEdit() {
    student_modal.current.classList.remove("student__modal__open");
}
function EditUsers(e) {
    e.preventDefault();
    let ready_to_upd = {
      full_name: full_name.current.value,
      contact: phone.current.value,
    };

    fetch(`https://crmpanel-yle6.onrender.com/users/${location.userID}/`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(ready_to_upd),
    });
    closeEdit();
}

// This function is used in the button on line 103 to delete the user
function handleDelete() {
    fetch(`https://crmpanel-yle6.onrender.com/users/${location.userID}/`, {
      method: "DELETE",
    });
    let path = "/users"
    navigation(path)
}

// Filtering users in this useEffect is being done
useEffect(() => {
    async function getStudent() {
      let fetchData = await fetch("https://crmpanel-yle6.onrender.com/users/");
      let json = await fetchData.json();
      let road = json.data;
      let filtered_user = road?.filter((item) => item._id === location.userID);
      setFilteredStudent(filtered_user);
    }

    getStudent();
}, [location.userID]);

// This functions to open the payment modal window
function openMoney() {
    modal2.current.classList.add("open");
}
function closeMoney() {
    modal2.current.classList.remove("open");
}
  return (
    <main className="student">
      <div className="container">
        <div className="student__wrapper">
          <div className="student__info">
            {filteredstudent && (
              <div className="student_info">
                <img src={user} alt="user" />
                <h2>{filteredstudent[0].full_name}</h2>
                <h5>{filteredstudent[0].create_at}</h5>
                <button className="student_btn">0 UZS</button>{" "}
                <span>balans</span>
                <p className="info_text">Telefon:</p>
                <h4>{filteredstudent[0].contact}</h4>
                  <div className="info__btns">
                    <button><MdGroupAdd size="15px" />Guruhga qo'shish</button>
                    <button className="tolov" onClick={openMoney} type="submit">
                      <MdAttachMoney size="15px" />
                      To'lov
                    </button>
                  </div>
              </div>
            )}
              <div className="edit">
                <button onClick={handleEdit}>
                 <LuPencil className="edit_btn1" />
                </button>
                <button onClick={handleDelete} type="submit">
                 <MdDeleteOutline className="edit_btn2" />
                </button>
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
              <div className="info2__cards"></div>
              <div className="info2__cards"></div>
            </div>
          </div>
        </div>
      </div>

       <div className="modal2__wrapper" ref={modal2}>
          <div className="modal2">
            <div className="modal2__content">
              <h4>To'lov</h4>
              <button onClick={closeMoney} type="submit">
                x
              </button>
            </div>
            <h4 className="modal2__title">Student</h4>
            {filteredstudent && (
              <div className="full_name">
                <h4>{filteredstudent[0].full_name}</h4>
              </div>
            )}
            <div className="balans">
              <h4>Balans</h4>
              <button className="student_btn">0 UZS</button>
            </div>
            <div className="payment__method">
              <h3>To'lov usuli</h3>
              <form className="payment_method__wrapper">
                <div className="payment__cards">
                  <label htmlFor="naqt">Naqt</label>
                  <input id="naqt" name="payment" type="radio" />
                </div>
                <div className="payment__cards">
                  <label htmlFor="naqt">Click</label>
                  <input id="naqt" name="payment" type="radio" />
                </div>
                <div className="payment__cards">
                  <label htmlFor="naqt">Karta</label>
                  <input id="naqt" name="payment" type="radio" />
                </div>
                <div className="payment__cards">
                  <label htmlFor="naqt">Payme</label>
                  <input id="naqt" name="payment" type="radio" />
                </div>
                <div className="payment__cards">
                  <label htmlFor="naqt">Uzum</label>
                  <input id="naqt" name="payment" type="radio" />
                </div>
              </form>
            </div>
          </div>
        </div>
      <form ref={student_modal} className="student__modal">
        <div className="change__modal">
          <label htmlFor="name">Name</label>
          <input ref={full_name} id="name" type="text" />
          <br />
          <label htmlFor="phone">Phone</label>
          <input ref={phone} id="phone" type="tel" />
          <br />
          <button onClick={EditUsers}>Submit</button>
          <button onClick={closeEdit}>x</button>
        </div>
      </form>
    </main>
  );
}

export default UserPage;
