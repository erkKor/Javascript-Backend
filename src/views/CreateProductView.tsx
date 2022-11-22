import React from 'react'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import ProductList from '../components/OWNPRODUCTS/ProductList'

const CreateProductView = () => {
  return (
    <>
    <Navbar headerType='header-light'/>
    <AddProducts />
    <ProductList />
    </>
  )
}

export default CreateProductView