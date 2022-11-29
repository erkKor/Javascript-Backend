import React from 'react'
import { NavLink } from 'react-router-dom'

const SaleText: React.FC = () => {
  return (
    <section className="sale-text">
        <div className="container">
            <NavLink to="/Products">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
        </div>
    </section>
  )
}

export default SaleText