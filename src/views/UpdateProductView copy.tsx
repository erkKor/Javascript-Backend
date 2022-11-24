import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import UpdateProducts from '../components/OWNPRODUCTS/UpdateProducts'
import { IProductContext, OwnProductContext } from '../contexts/OwnProductContext'

const UpdateProductsView = () => {
  const id = useParams()
    // const [product, setProducts] = useState({})
    const {product, setProduct, get, update} = React.useContext(OwnProductContext) as IProductContext;

    useEffect(() => {
       get(Number(id))
    },[])

  
  return (
    <>
    <Navbar headerType='header-light'/>
    <UpdateProducts />
    <div>{JSON.stringify(id)}</div>
    </>
  )
}

export default UpdateProductsView