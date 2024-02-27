import React from 'react'
import "../style/homeHero.css"
function HomeHero() {
  return (
    <section className='homeHero'>
       <div className="container">
        <div className="homeHero__grid">
            <div className="homeHero__cards">
                <h4>Faol Lidlar</h4>
                <span>5</span>
            </div>
            <div className="homeHero__cards">
                <h4>Faol Talabalar</h4>
                <span>4</span>
            </div>
            <div className="homeHero__cards">
                <h4>Guruhlar</h4>
                <span>7</span>
            </div>
            <div className="homeHero__cards">
                <h4>Qarzdorlar</h4>
                <span>3</span>
            </div>
            <div className="homeHero__cards">
                <h4>Sinov darsida</h4>
                <span>0</span>
            </div>
            <div className="homeHero__cards">
                <h4>Joriy oyda to'laganlar</h4>
                <span>1</span>
            </div>
            <div className="homeHero__cards">
                <h4>Guruhni tark etganlar</h4>
                <span>8</span>
            </div>
            
        </div>
        <div className="homeHero__table">
            <div className="table_top">
                <div className="table__days">
                <h4>Toq kunlar</h4>
                <h4>Juft kunlar</h4>
                <h4>Boshqa</h4>
                </div>
                <h3>Jadval</h3>
                <div className="table__located">
                    <h4>Gorizontal</h4>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default HomeHero