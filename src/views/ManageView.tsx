import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import AddProducts from '../components/AddProducts'
import AddedProducts from '../components/AddedProducts'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS_QUERY } from '../queries/productQueries'
import { NavLink } from 'react-router-dom'

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
      <p>Want to add a new Brand? Click here</p>
      <NavLink to="/Manage/Brand" end className="button-theme">Add Brand</NavLink>
    </div>
    <AddProducts />
    <AddedProducts title="Added Products" items={data.products}/> 
    <Footer />
    </>
  )
}

export default CreateProductView