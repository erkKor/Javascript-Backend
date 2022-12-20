import React from 'react'
import Card from '../items/Card'
import CardTEST from '../items/Card'

const FeaturedProducts = ({title,items}) => {
  return (
    <section className="featured-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.products.map((products) => <CardTEST key={products._id} product={products} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts