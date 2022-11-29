import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Card from '../components/items/Card'
import Navbar from '../components/Navbar'
import UpdateProducts from '../components/OWNPRODUCTS/UpdateProducts'
import { IProductContext, OwnProductContext } from '../contexts/OwnProductContext'

const UpdateProductsView = () => {
  const {id} = useParams()
  const {get, product} = React.useContext(OwnProductContext) as IProductContext;

  useEffect(() => {
      get(Number(id))
  }, [])
  
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
      <h3>Preview</h3>
      <span className="info-text">ONLY UPDATES INFO ON SUBMIT</span>
      <Card product={product}/>
    </div>
    <Footer />
    </>
  )
}

export default UpdateProductsView