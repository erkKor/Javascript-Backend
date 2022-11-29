import React from 'react'
import Button from './Button'
import Stars from './Stars'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartContextType} from '../../contexts/ShoppingCartContext'
import { currencyFormatter } from '../../utilities/CurrencyFormater'
import { Product } from '../../models/ProductModel'

interface CardType{
    product: Product
}

const Card: React.FC<CardType> = ({product}) => {
    const {incrementQuantity} = React.useContext(ShoppingCartContext) as ShoppingCartContextType;

    return (
    <div className="_card">
        <ul className="_card-menu">
            <li><button><i className="fa-light fa-heart"></i></button></li>
            <li><button><i className="fa-light  fa-code-compare rotate-icon"></i></button></li>
            <li><button onClick={() => incrementQuantity({
                articleNumber: product.articleNumber, product: product,
                quantity: 0
            })}><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
        <div className="_card-background">
            <img src={product.imageName} alt={product.name}/>
            <NavLink to={`/products/${product.articleNumber}`}>
                <Button theme='button-theme' themeBorder='button-theme-border'/>
            </NavLink>
        </div>
        <div className="_card-body">
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <div className="stars">
                 <Stars number={product.rating}/>
            </div>
            <div className="_card-prices"> 
                <div className="original-price"></div>
                <div className="discount-price">{currencyFormatter(product.price)}</div>
            </div>
        </div>
    </div>
  )
}

export default Card