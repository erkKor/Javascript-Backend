import React, { useContext } from 'react'
import { ShoppingCartContext, ShoppingCartContextType } from '../../contexts/ShoppingCartContext'
import { CartItem } from '../../models/shoppingCartModel'
import { currencyFormatter } from '../../utilities/CurrencyFormater'

interface ShoppingCartItemType{
  item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
  const {incrementQuantity, decrementQuantity, removeItem} = useContext(ShoppingCartContext) as ShoppingCartContextType

  return (
    <div className="shoppingcart-item">
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name}/>
      </div>
      <div className="item-info">
        <div className="item-info-name">{item.product.name}</div>
        <div className="item-info-quantity">
          <button onClick={() => decrementQuantity(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => incrementQuantity(item)}>+</button>
          </div>
      </div>
      <div className="item-price">
        <div>{currencyFormatter(item.product.price * item.quantity)}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i className="fa-light fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem