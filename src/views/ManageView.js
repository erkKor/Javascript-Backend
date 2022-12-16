import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import AddedProducts from '../components/OWNPRODUCTS/AddedProducts'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import AddProductsNEW from '../components/OWNPRODUCTS/AddProductsNEW'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS_QUERY } from '../queries/productQueries'

// const GET_PRODUCTS_QUERY = gql`{products { _id, name, category, tag, price, rating, vendor {name}}}`

const CreateProductView = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Error... : {error.message}</p>

  return (
    <>
    <Navbar headerType='header-light'/>
    <Breadcrumb currentPage="Manage"/>
    <div className="_container manage-choices">
      <h3>Manage products</h3>
    </div>
    {/* <AddProducts /> */}
    <AddProductsNEW />
    <AddedProducts title="Added Products" items={data.products}/> 
    <Footer />
    </>
  )
}

export default CreateProductView