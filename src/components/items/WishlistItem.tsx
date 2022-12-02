import React, { useContext } from 'react'
import { ShoppingCartContext, ShoppingCartContextType} from '../../contexts/ShoppingCartContext'
import { WishlistContext, WishlistContextType } from '../../contexts/WishlistContext'
import { CartItem } from '../../models/shoppingCartModel'
import { currencyFormatter } from '../../utilities/CurrencyFormater'
import Stars from './Stars'

interface WishlistType{
  item: CartItem
}

const WishlistItem: React.FC<WishlistType> = ({item}) => {
  const {addOrRemoveWishlistItem, removeItem} = useContext(WishlistContext) as WishlistContextType
  const {incrementQuantity} = useContext(ShoppingCartContext) as ShoppingCartContextType

  return (
    <div className="wishlist-item">
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name}/>
      </div>
      <div className="item-info">
        <p className="item-category">{item.product.category}</p>
        <h3 className="item-name">{item.product.name}</h3>
        <div className="stars">
          <Stars ratingNumber={item.product.rating}/>
        </div>
        <p className="item-price">{currencyFormatter(item.product.price)}</p>
        <div className="item-info-quantity">
          {/* <button onClick={() => incrementWishlistQuantity(item)}>+</button> */}
          </div>
      </div>
      <div className="edit-buttons">
        <button className="edit-button" onClick={() => removeItem(item.articleNumber)}><i className="fa-light fa-heart-circle-xmark"></i></button>
        <button className="edit-button" onClick={() => incrementQuantity({
                articleNumber: item.product.articleNumber, product: item.product,
                quantity: 0
            })}><i className="fa-light fa-bag-shopping"></i></button>
      </div>
    </div>
  )
}

export default WishlistItem