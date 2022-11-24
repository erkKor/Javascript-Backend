import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/items/Breadcrumb'
import Card from '../components/items/Card'
import Navbar from '../components/Navbar'
import UpdateProducts from '../components/OWNPRODUCTS/UpdateProducts'
import { IProductContext, OwnProductContext } from '../contexts/OwnProductContext'

const UpdateProductsView = () => {
  const {id} = useParams()
  const {setProduct, get, product} = React.useContext(OwnProductContext) as IProductContext;

  useEffect(() => {
      get(Number(id))
  }, [setProduct])
  
  return (
    <>
    <Navbar headerType='header-light'/>
    <section className="breadcrumb">
      <div className="container">
          <ul className="breadcrumb-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Manage">Manage</NavLink></li>
              <li>Update Product</li>
          </ul>
      </div>
    </section>
    <UpdateProducts />
    <div className="update-info">
      <Card product={product}/>
    </div>
    </>
  )
}

export default UpdateProductsView