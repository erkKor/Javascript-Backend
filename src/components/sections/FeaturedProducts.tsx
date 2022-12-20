import React from 'react'
import { Product, GraphQLProduct } from '../../models/ProductModel'
import Card from '../items/Card'

interface FeaturedProductsType{
  title: string
  items: GraphQLProduct[]
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
                  items.map((product) => <Card key={product._id} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts