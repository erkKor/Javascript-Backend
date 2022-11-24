import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    <UpdateProducts />
    <div className="update-info">
      <Card product={product}/>
    </div>
    </>
  )
}

export default UpdateProductsView