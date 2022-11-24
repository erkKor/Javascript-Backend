import React from 'react'
import { IProductContext, OwnProductContext } from '../../contexts/OwnProductContext'


const AddProducts = () => {
  const { productRequest, setProductRequest, create } = React.useContext(OwnProductContext) as IProductContext

  return (
    <form onSubmit={create} className="d-grid mb-5 mt-5 create">
      <h3>Add Product</h3>
        <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter name..."/>
        <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter category..."/>
        <input id="priceInput" value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: +e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter price..."/>
        <input value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: +e.target.value})} type="number" max="5" className="form-control py-2 mb-3" placeholder="Enter rating..."/>
        <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Url Link (optional)"/>
        <button type="submit" className="button-theme">Add Product</button>
    </form>
  )
}

export default AddProducts