import React from 'react'
import GirlOnChair from '../../assets/images/placeholders/girl-on-chair.png'
import GirlOnChairReal from '../../assets/images/placeholders/1.png'
import SittingPerson from '../../assets/images/placeholders/sitting-person.png'
import SittingPersonReal from '../../assets/images/placeholders/2.png'
import Button from '../items/Button'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="_container">
            <img src={GirlOnChairReal} alt="" className="img1" />
            <div className="showcase-text">
                <h1>SALE UP<span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                <Button theme='button-theme' themeBorder='button-theme-border'/>
            </div>
            <img src={SittingPersonReal} alt="" className="img2" />
        </div>
    </section>
  )
}

export default Showcase