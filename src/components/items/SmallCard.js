import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { currencyFormatter } from '../../utilities/CurrencyFormater'

const SmallCard = ({product}) => {
  return (
    <div className="small-card">
        <div className="_card-background">
            <img src={product.imageName} alt={product.name}/>
            <NavLink to={`/products/${product.articleNumber}`}>
                <Button to="/products" theme='button-theme' themeBorder='button-theme-border'/>
            </NavLink>
        </div>
        <div className="_card-body">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="_card-prices"> 
                <div className="original-price"></div>
                <div className="discount-price">{currencyFormatter(product.price)}</div>
            </div>
        </div>
    </div>
  )
}
export default SmallCard