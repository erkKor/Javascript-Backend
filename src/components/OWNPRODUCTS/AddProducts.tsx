import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { validate, validateInput } from '../../assets/scripts/validation'
import { IProductContext, OwnProductContext } from '../../contexts/OwnProductContext'


const AddProducts = () => {
  const { productRequest, setProductRequest, create } = React.useContext(OwnProductContext) as IProductContext

  return (
    <form onSubmit={create} className="d-grid mb-5 mt-5 create">
      <h3>Add Product</h3>
                                                                             {/* onclick={()=>{ f1(); f2() }}
                                                                                onChange={(e) => {setProductRequest({...productRequest, name: e.target.value}); validate(e)}}
                                                                             */}
        <input id="name" value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter name..."/>
        <input id="category" value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."/>
        <input id="price" value={productRequest.price} onChange={(e) => {setProductRequest({...productRequest, price: +e.target.value}); validateInput()}} type="number" className="form-control py-2 mb-3" placeholder="Enter price..."/>
        <p id="demo"></p>
        <input id="rating" value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-3" placeholder="Enter rating..."/>
        <input id="imageName" value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Url Link (optional)"/>
        <button type="submit" className="button-theme">Add Product</button>
    </form>
  )
}

export default AddProducts