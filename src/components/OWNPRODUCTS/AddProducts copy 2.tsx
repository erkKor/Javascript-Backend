import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { validateInput } from '../../assets/scripts/validation'
import { IProductContext, OwnProductContext } from '../../contexts/OwnProductContext'


const AddProducts = () => {
  const { productRequest, setProductRequest, create } = React.useContext(OwnProductContext) as IProductContext
 
  return (
    <form onSubmit={create} className="d-grid mb-5 mt-5 create">
      <h3>Add Product</h3>
        <input id="name" value={productRequest.name} onChange={(e) => {setProductRequest({...productRequest, name: e.target.value}); validateInput(e)}} type="text" className="form-control py-2 mb-3" placeholder="Enter name..."/>
          <div id="errorName" className="errorMessage"></div>
        <input id="category" value={productRequest.category} onChange={(e) => {setProductRequest({...productRequest, category: e.target.value}); validateInput(e)}} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."/>
          <div id="errorCategory" className="errorMessage"></div>
        <input id="price" value={productRequest.price} onChange={(e) => {setProductRequest({...productRequest, price: Number(e.target.value)}); validateInput(e)}} type="number" className="form-control py-2 mb-3" placeholder="Enter price..."/>
          <div id="errorPrice" className="errorMessage"></div>
        <input id="rating" value={productRequest.rating} onChange={(e) => {setProductRequest({...productRequest, rating: Number(e.target.value)}); validateInput(e)}} type="number" className="form-control py-2 mb-3" placeholder="Enter rating..."/>
          <div id="errorRating" className="errorMessage"></div>
        <input id="imageName" value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Url Link (optional)"/>
          <div className="errorMessage"></div>
        <button type="submit" className="button-theme">Add Product</button>
    </form>
  )
}

export default AddProducts