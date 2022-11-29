import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import AddedProducts from '../components/OWNPRODUCTS/AddedProducts'
import { OwnProductContext, IProductContext } from '../contexts/OwnProductContext'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'

const CreateProductView = () => {
  const {products, getAll} = React.useContext(OwnProductContext) as IProductContext

  useEffect(() => {
    getAll()
  }, [])

  // let addedProducts = products

  return (
    <>
    <Navbar headerType='header-light'/>
    <Breadcrumb currentPage="Manage"/>
    <div className="_container manage-choices">
      <h3>Manage products</h3>
    </div>
    <AddProducts />
    <AddedProducts title="Added Products" items={products}/> 
    <Footer />
    </>
  )
}

export default CreateProductView