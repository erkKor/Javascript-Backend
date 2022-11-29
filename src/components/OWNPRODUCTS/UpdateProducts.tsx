import React from 'react'
import { NavLink } from 'react-router-dom'
import { OwnProductContext, IProductContext } from '../../contexts/OwnProductContext'

const UpdateProducts = () => {
  const {product, setProduct, update } = React.useContext(OwnProductContext) as IProductContext

  return (
    <form onSubmit={update} className="d-grid mb-5 create update-products">
      <div className="top-bar">
        <NavLink to="/Manage" className="back-arrow"><i className="fa-solid fa-arrow-left"></i></NavLink>
        <h3>Update Product Info</h3>
      </div>
      <input type="hidden" value={product.articleNumber}/> 
        <label>Product Category</label>
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Enter category..."/>
        <label>Product Name</label>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Enter name..."/>
        <label>Product Price</label>
        <input value={product.price} onChange={(e) => setProduct({...product, price: +e.target.value})} type="number" className="form-control py-2 mb-2" placeholder="Enter price..."/>
        <label>Product Rating</label>
        <input value={product.rating} onChange={(e) => setProduct({...product, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-2" placeholder="Enter rating..."/>
        <label>Product Image</label>
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-2" placeholder="Url Link (optional)"/>
        <button type="submit" className="button-theme">Update Info</button>
    </form>

    
  )
}

export default UpdateProducts