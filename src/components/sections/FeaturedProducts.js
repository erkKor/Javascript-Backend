import React from 'react'
import Card from '../items/Card'

const FeaturedProducts = ({title,items = []}) => {
  return (
    <section className="featured-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.map(product => <Card key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts