import React from 'react'
import Card from '../items/Card'

const BigSquareWCardsRight = ({id, offer, items = []}) => {
  return (
    <section className="big-square-cards" id={id}>
        <div className="_container">
        <div className="card-grid">
                {
                  items.map(product => <Card key={product.articleNumber} product={product} />)
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

export default BigSquareWCardsRight