import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import AddedProducts from '../components/OWNPRODUCTS/AddedProducts'
import ProductList from '../components/OWNPRODUCTS/ProductList'
import { OwnProductContext, IProductContext} from '../contexts/OwnProductContext'
import Breadcrumb from '../components/items/Breadcrumb'

const CreateProductView = () => {
  const {products, getAll, remove} = React.useContext(OwnProductContext) as IProductContext

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
      {/* <NavLink to="/Manage/Create" end className="manage-links">Add Product</NavLink> */}
      {/* <NavLink to="/Manage/Update" end className="manage-links">Update Product</NavLink> */}
      {/* <NavLink to="/Manage/Create" end className="manage-links">Remove Product</NavLink> */}
    </div>
    <AddProducts />
    <AddedProducts title="Added Products" items={products}/> 
    </>
  )
}

export default CreateProductView