import React from 'react'
import "../style/homeHero.css"
function HomeHero() {
  return (
    <section className='homeHero'>
        <div className="container">
        
            <div className="homeHero__grid">

                <div className="homeHero__left">
                <h4>Application Statistics</h4>
                    <div className="homeHero__left__wrapper">
                        <div className="homeHero__left__cards">
                            <h2>6</h2>
                            <h5>Contract Roles</h5>
                        </div>
                        <div className="homeHero__left__cards">
                            <h2>12</h2>
                            <h5>Full-Time Roles</h5>
                        </div>
                        <div className="homeHero__left__cards">
                            <h2>18</h2>
                            <h5>Total Applications</h5>
                        </div>
                    </div>
                   <h4>Status Board</h4>
                    <div className="homeHero__board">
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                        <div className='homeHero__board__texts'>
                            <ul>
                                <li>Apple</li>
                                <li>Visual Designer</li>
                                <li>Full time</li>
                                <li>123456789</li>
                                <li>Phone Interview</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="homeHero__right">
                <h4>Interviews</h4>
                    <div className="homeHero__right__cards">
                        <h3>Figma | Product Designer</h3>
                        <span>Interview | Chad Lee</span>
                        <span>May 4, 2020 @12:30 pm - 1:00 pm</span>
                    </div>
                    <h4>Roles</h4>
                    <div className="homeHero__right__cards">
                        <h2>6</h2>
                        <h3>Visual Designer</h3>
                    </div>
                    <div className="homeHero__right__cards">
                        <h2>4</h2>
                        <h3>Product Designer</h3>
                    </div>
                    <div className="homeHero__right__cards">
                        <h2>6</h2>
                        <h3>Interactive Designer</h3>
                    </div>
                    <div className="homeHero__right__cards">
                        <h2>2</h2>
                        <h3>UX/ UI Designer</h3>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default HomeHero