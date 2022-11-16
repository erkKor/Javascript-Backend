import React from 'react'
import Card from '../items/Card'

const FeaturedProducts = ({title,items}:any) => {
  return (
    <section className="featured-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  items.map((product:any) => <Card key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts