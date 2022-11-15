import React from 'react'

const OurSpeciality = () => {
  return (
    <section className="our-speciality">
        <div className="_container">
            <div className="section-title">
                <h3>Our Speciality</h3>
            </div>
            <div className="wide-cards">
                <div className="wide-card">
                    <div className="card-content">
                        <h3>Track Your Order</h3>
                        <a href="">Get started <i className="fa-solid fa-chevron-right"></i> </a>
                    </div>
                    <div className="gray-square"></div>
                </div>
                <div className="wide-card">
                    <div className="card-content">
                        <h3>Make a Return</h3>
                        <a href="">Get started <i className="fa-solid fa-chevron-right"></i> </a>
                    </div>
                    <div className="gray-square"></div>
                </div>
                <div className="wide-card">
                    <div className="card-content">
                        <h3>Request a Price Adjustment</h3>
                        <a href="">Get started <i className="fa-solid fa-chevron-right"></i> </a>
                    </div>
                    <div className="gray-square"></div>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default OurSpeciality