import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import Filler from '../components/Filler'
import Wishlist from '../components/Wishlist'

const WishlistView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Wishlist"/>
    {/* <Filler /> */}
    <Wishlist />
    <Footer />
  </>
  )
}

export default WishlistView