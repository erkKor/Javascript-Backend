import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Breadcrumb from '../components/items/Breadcrumb'
import { useProductContext } from '../contexts/ProductContext'


const ProductsView = () => {
  const {products, getProducts} = useProductContext()
  
  useEffect(() => {
    getProducts()
  }, [])

  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Products"/>
    <FeaturedProducts title="All Products" items={products}/> 
    <Footer />
  </>
  )
}

export default ProductsView