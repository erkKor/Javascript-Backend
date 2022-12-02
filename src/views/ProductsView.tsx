import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Breadcrumb from '../components/items/Breadcrumb'
import { ProductContext, IProductContext } from '../contexts/ProductContext'


const ProductsView = () => {
   const {products, getAll} = React.useContext (ProductContext) as IProductContext
  
  useEffect(() => {
    getAll()
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