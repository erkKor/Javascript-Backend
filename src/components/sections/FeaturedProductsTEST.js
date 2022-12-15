import React from 'react'
import { Product } from '../../models/ProductModel'
import Card from '../items/Card'
import CardTEST from '../items/CardTEST'

// interface FeaturedProductsType{
//   title: string
//   items: Product[]
// }

const FeaturedProducts = ({title,items}) => {

  console.log(items.products)
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