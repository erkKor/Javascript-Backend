import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import { useQuery } from '@apollo/client'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import { GET_PRODUCTS_QUERY } from '../queries/productQueries'

const ProductsView: React.FC = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Error... : {error.message}</p>

  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Products"/>
    <FeaturedProducts title="All Products" items={data.products}/> 
    <Footer />
  </>
  )
}

export default ProductsView