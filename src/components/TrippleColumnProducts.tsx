import React from 'react'
import { Product } from '../models/ProductModel'
import SmallCard from './items/SmallCard'

interface TrippleColumType{
  items1: Product[],
  items2: Product[],
  items3: Product[],
}

const TrippleColumnProducts: React.FC <TrippleColumType> = ({items1, items2, items3}) => {
  return (
    <section className="three-row-products">
        <div className="_container">
            <div className="product-column">
                <h2>Latest Product</h2>
                {
                 items1.map((product) => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
            <div className="product-column">
                <h2>Best Selling Product</h2>
                {
                  items2.map((product) => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
            <div className="product-column">
                <h2>Top Reacted Product</h2>
                {
                  items3.map((product) => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default TrippleColumnProducts