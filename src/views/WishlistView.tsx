import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import Filler from '../components/Filler'
import WishlistMapper from '../components/WishlistMapper'
import { WishlistContext, WishlistContextType } from '../contexts/WishlistContext'

// import Wishlist from '../components/Wishlist'



const WishlistView: React.FC = () => {
  const {wishlistItems} = React.useContext(WishlistContext) as WishlistContextType

  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Wishlist"/>
    {/* <Filler /> */}
    <WishlistMapper />
    <Footer />
  </>
  )
}

export default WishlistView