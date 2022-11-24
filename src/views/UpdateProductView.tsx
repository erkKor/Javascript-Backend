import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AddProducts from '../components/OWNPRODUCTS/AddProducts'
import UpdateProducts from '../components/OWNPRODUCTS/UpdateProducts'
import { IProductContext, OwnProductContext } from '../contexts/OwnProductContext'

const UpdateProductsView = () => {
  const {id} = useParams()
  const {product, setProduct, get, update} = React.useContext(OwnProductContext) as IProductContext;

  useEffect(() => {
      get(Number(id))
  }, [setProduct])
  
  return (
    <>
    <Navbar headerType='header-light'/>
    <form onSubmit={update} className="d-grid mb-5">
      <h3>Update User</h3>
        <input type="hidden" value={product.articleNumber}/>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter name..."/>
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."/>
        <input value={product.price} onChange={(e) => setProduct({...product, price: +e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter price..."/>
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-3" placeholder="Enter rating..."/>
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Url Link (optional)"/>
        <button type="submit" className="btn btn-success">Update Info</button>
    </form>
    {/* <div>{JSON.stringify(id)}</div> */}
    </>
  )
}

export default UpdateProductsView