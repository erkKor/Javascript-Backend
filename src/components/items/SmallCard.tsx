import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../../utilities/CurrencyFormater'
import { Product, GraphQLProduct } from '../../models/ProductModel'
import Stars from './Stars'

interface SmallCardType{
    product: GraphQLProduct
}

const SmallCard: React.FC<SmallCardType> = ({product}) => {
  return (
    <div className="small-card">
        <div className="_card-background">
            <img src={product.imageName} alt={product.name}/>
            <NavLink to={`/products/${product._id}`}>
                <Button theme='button-theme' themeBorder='button-theme-border'/>
            </NavLink>
        </div>
        <div className="_card-body">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <div className="stars">
                <Stars ratingNumber={product.rating}/>
            </div>
            <div className="_card-prices"> 
                <div className="original-price"></div>
                <div className="discount-price">{currencyFormatter(Number(product.price))}</div>
            </div>
        </div>
    </div>
  )
}
export default SmallCard