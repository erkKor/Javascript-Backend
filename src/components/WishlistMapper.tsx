import React from 'react'
import { WishlistContext, WishlistContextType } from '../contexts/WishlistContext'
import { currencyFormatter } from '../utilities/CurrencyFormater'
import WishlistItem from './items/WishlistItem'



const Wishlist: React.FC = () => {

  const {wishlistItems, removeItem} = React.useContext(WishlistContext) as WishlistContextType
  

  // let TotalPrice = 0
  // cartItems.map(item => TotalPrice = TotalPrice + item.product.price * item.quantity)

  return (
    <div className="_container">
      <div className="wishlist-grid">
        {
          wishlistItems.map(item => (<WishlistItem key={item.articleNumber} item={item} />))
        }
        
      </div>
    </div>
  )
}

export default Wishlist