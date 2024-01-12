import React from 'react'
import "../style/form.css"

function QabulPage() {
  return (
    <div className='wrapper'>
    <form className='form'>
        <div className="card">
            <h3 className='title'>REGISTER</h3>                  
        </div>
        <label htmlFor="name">
        <i class="fa-solid fa-user"></i>
            Name</label>
        <input id='name' type="text" placeholder='F.I.O'required />

        <label htmlFor="phone">
        <i class="fa-solid fa-phone"></i>
        Phone</label>
        <input id='phone' type="number" placeholder='Telephone' required/>

        <label htmlFor="kurs"><i class="fa-solid fa-list"></i>Kurs</label>
        <select name="kurs" id="" required>
            <optgroup label='Choose Kurs' >
                <option value="" >Frontend</option>
                <option value="" selected>Backend</option>
                <option value="">Grafik dizayn</option>
                <option value="">Web dizayn</option>
            </optgroup>
        </select>

        <label htmlFor="data"><i class="fa-solid fa-calendar-days"></i>Date</label>
        <input id='data' type="date" required/> <br />
        <button>Submit</button>
    </form>
</div>
  )
}

export default QabulPage