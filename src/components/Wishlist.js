import React from 'react'
import { useWishlist } from '../contexts/WishlistContext'
import { currencyFormatter } from '../utilities/CurrencyFormater'
import WishlistItem from './items/WishlistItem'



const Wishlist = () => {
  const {wishlistItems, removeItem} = useWishlist()
  

  // let TotalPrice = 0
  // cartItems.map(item => TotalPrice = TotalPrice + item.product.price * item.quantity)

  return (
    <div>
      {/* <div className="mapping">
        {
          wishlistItems.map(item => (<WishlistItem key={item.articleNumber} item={item} />))
        }
      </div> */}
    </div>
    // <div className="shoppingcart offcanvas offcanvas-end" tabindex="-1" id="wishlist" aria-labelledby="wishlistLabel">
    //   <div className="offcanvas-header">
    //     <h4 className="offcanvas-title" id="wishlistLabel"><i className="fa-light fa-bag-shopping me-2"></i>Shopping Cart</h4>
    //     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //   </div>
    //   <div className="offcanvas-body">
    //     {
    //       wishlistItems.map(item => (<WishlistItem key={item.articleNumber} item={item} />))
    //     }
    //   </div>
    //   <div className="checkout">
    //     <h5>Total: {currencyFormatter(TotalPrice)}</h5>
    //     <button className="button-theme">Check Out
    //       <div className="button-theme-border"></div>
    //     </button>
    //   </div>
    // </div>
  )
}

export default Wishlist