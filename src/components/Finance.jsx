import React from 'react'
import "../style/finance.css"
function Finance() {
  return (
    <section className='finance'>
        <div className="container">
            <h2>Barcha to'lovlar</h2>
            <div className="finance__grid">
                <div className="finance__boxs">
                    <div className="finance__box">
                    <h4>To'lov miqdori: 5,000,000 so'm</h4>
                    </div>
                    <div className="finance__box">
                    <h4>Umumiy foyda miqdori: 2,000,000 so'm</h4>
                    </div>

                </div>  
                <div className="box3">

                </div>
            </div>
            <ul>
                
                <li>Sanadan boshlab <input type="date" /></li>
                <li>Sana bo'yicha  <input type="date" /></li>
                <li>Ism yoki Telefon <input type="text" /></li>
                <li>Guruhni tanlash   
                <select name="Tanlang" >
                    <optgroup label='Tanlang'>
                        <option value="">Frontend</option>
                        <option value="">Backend</option>
                        <option value="">Web disegneer</option>
                        <option value="">English group</option>

                    </optgroup>
                </select></li>
                <li>O'qituvchi  <input type="text" /></li>
                <li>To'lov turi <select name="" id="">
                    <option value="">Naqt</option>
                    <option value="">Karta orqali</option>
                </select></li>
                <li>Summa <input type="number" /></li>
                <button>Filtr</button>
            </ul>

        </div>
    </section>
  )
}

export default Finance