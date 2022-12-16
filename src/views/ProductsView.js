import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Breadcrumb from '../components/items/Breadcrumb'
import { ProductContext, IProductContext } from '../contexts/ProductContext'
import { useQuery, useMutation, gql } from '@apollo/client'
import FeaturedProductsTEST from '../components/sections/FeaturedProductsTEST'

const GET_PRODUCTS_QUERY = gql`{products { _id, name, category, tag, price, rating, vendor {name}}}`

const ProductsView = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Error... : {error.message}</p>

  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Products"/>
    <FeaturedProductsTEST title="All Products" items={data}/> 
    {/* <FeaturedProducts title="All Products" items={products}/>  */}
    <Footer />
  </>
  )
}

export default ProductsView