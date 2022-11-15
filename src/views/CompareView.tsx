import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import Filler from '../components/Filler'

const CompareView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Compare"/>
    <Filler />
    <Footer />
  </>
  )
}

export default CompareView