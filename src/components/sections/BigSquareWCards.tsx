import React from 'react'
import { Product, GraphQLProduct } from '../../models/ProductModel'
import Card from '../items/Card'

interface BigSquareWCardsType{
  id: string
  offer: string
  items: GraphQLProduct[]
}

const BigSquareWCards: React.FC<BigSquareWCardsType> = ({id, offer, items}) => {
  return (
    <section className="big-square-cards" id={id}>
        <div className="_container">
        <div className="card-grid">
                {
                  items.map((product)=> <Card key={product._id} product={product} />)
                }
            </div>
            <div className="big-square">
                <h1>{offer}</h1>
                <button className="button-theme-white">FLASH SALE
                    <div className="button-theme-border"></div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default BigSquareWCards