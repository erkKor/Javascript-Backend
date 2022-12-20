import React, { useContext } from 'react'
import Button from './Button'
import Stars from './Stars'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartContextType} from '../../contexts/ShoppingCartContext'
import { currencyFormatter } from '../../utilities/CurrencyFormater'
import { GraphQLProduct } from '../../models/ProductModel'
import { WishlistContext, WishlistContextType } from '../../contexts/WishlistContext'

interface ProductType{
    product: GraphQLProduct
}

const Card:React.FC <ProductType> = ({product}) => {
    const {incrementQuantity} = React.useContext(ShoppingCartContext) as ShoppingCartContextType;
    const {addOrRemoveWishlistItem} = React.useContext(WishlistContext) as WishlistContextType;

    return (
    <div className="_card">
        <ul className="_card-menu">
            <li><button onClick={() => addOrRemoveWishlistItem({
                articleNumber: product._id, product: product,
                quantity: 0
            })}><i className="fa-light fa-heart"></i></button></li>
            <li><button><i className="fa-light  fa-code-compare rotate-icon"></i></button></li>
            <li><button onClick={() => incrementQuantity({
                articleNumber: product._id, product: product,
                quantity: 0
            })}><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
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

export default Card