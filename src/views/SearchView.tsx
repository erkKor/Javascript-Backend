import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import Filler from '../components/Filler'

const SearchView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Search"/>
    <Filler />
    <Footer />
  </>
  )
}

export default SearchView