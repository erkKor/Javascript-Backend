import React from 'react'
import CustomerSupport from '../assets/images/icons/customer-support.svg'
import SecuredPayment from '../assets/images/icons/secure-payment.svg'
import DeliveryTruck from '../assets/images/icons/delivery-truck.svg'

const InfoIcons = () => {
  return (
    <section className="info-icons">
        <div className="_container">
            <div className="info-container">
                <div className="icon-circle">
                    <img src={CustomerSupport} alt="Free Shipping" />
                 </div>
                <h3>Customer Support</h3>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="info-container">
                <div className="icon-circle">
                    <img src={SecuredPayment} alt="" />
                </div>
                <h3>Secured Payment</h3>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="info-container">
                <div className="icon-circle">
                    <img src={DeliveryTruck} alt="" />
                </div>
                <h3>Free Home Delivery</h3>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="info-container">
                <div className="icon-circle">
                    <img src={DeliveryTruck} alt="" />
                </div>
                <h3>30 Days Reuters</h3>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            
            
        </div>
    </section>
  )
}

export default InfoIcons