import React from 'react'
import { Product } from '../../models/ProductModel'
import Card from '../items/Card'

interface FeaturedProductsType{
  title: string
  items: Product[]
}

const FeaturedProducts: React.FC<FeaturedProductsType> = ({title,items}) => {
  return (
    <section className="featured-products">
        <div className="_container">
            <div className="section-title">
                <h3>{title}</h3>
            </div>
            <div className="card-grid">
                {
                  // Funkar det att sätta + 1 ?
                  items.map((product) => <Card key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts