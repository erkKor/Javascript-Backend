import React from 'react'
import YellowSweater from '../../assets/images/placeholders/5.png'
import redSweater from '../../assets/images/placeholders/6.png'

const ShowcaseCardDouble = () => {
  return (
    <section className="double-showcase-card">
        <div className="_container">
            <div className="left-card">
                <img src={YellowSweater} alt="" className="img1" />
                <div className="card-content">
                    <h2>Pamela Reif's <span>Top Picks</span></h2>
                    <button className="button-theme-dark">SHOP NOW
                        <div className="button-theme-border"></div>
                    </button>
                </div>
            </div>
            <div className="right-card">
                <div className="card-content">
                    <h2>Let's Be<span>Concious</span></h2>
                    <button className="button-theme-white">SHOP NOW
                        <div className="button-theme-border"></div>
                    </button>
                </div>
                <img src={redSweater} alt="" className="img1" />
            </div>
        </div>
    </section> 
  )
}

export default ShowcaseCardDouble