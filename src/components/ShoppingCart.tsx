import React from 'react'
import { currencyFormatter } from '../utilities/CurrencyFormater'
import ShoppingCartItem from './items/ShoppingCartItem'
import { ShoppingCartContextType, ShoppingCartContext } from '../contexts/ShoppingCartContext'

const ShoppingCart: React.FC = () => {
  const {cartItems} = React.useContext(ShoppingCartContext) as ShoppingCartContextType;

  let TotalPrice = 0
  cartItems.map(item => TotalPrice = TotalPrice + Number(item.product.price) * item.quantity)

  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-light fa-bag-shopping me-2"></i>Shopping Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {
          cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
        }
      </div>
      <div className="checkout">
        <h5>Total: {currencyFormatter(TotalPrice)}</h5>
        <button className="button-theme">Check Out
          <div className="button-theme-border"></div>
        </button>
      </div>
    </div>
  )
}

export default ShoppingCart