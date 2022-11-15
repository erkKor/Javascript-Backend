import React from 'react'
import YellowSweater from '../../assets/images/placeholders/3.png'
import GuyStanding from '../../assets/images/placeholders/4.png'

const ShowcaseCardBigSmall = () => {
  return (
    <section className="showcasecard-big-small">
        <div className="_container">
            <div className="big-card">
                <div className="content">
                    <h2>Winter Clearance <span>Up to 70% Off!</span></h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                    <button className="button-theme-dark">SHOP NOW
                        <div className="button-theme-border"></div>
                    </button>
                </div>
                <img src={YellowSweater} alt="" className="img1" />
            </div>
            <div className="small-card">
                <div className="content">
                    <h2>New <span>Arrivals</span></h2>
                    <button className="button-theme-dark">SHOP NOW
                        <div className="button-theme-border"></div>
                    </button>
                </div>
                <img src={GuyStanding} alt="" className="img1" />
            </div>
        </div>
    </section>
  )
}

export default ShowcaseCardBigSmall