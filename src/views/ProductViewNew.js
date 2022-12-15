import React from 'react'
import ProductCreateForm from '../components/product/ProductCreatForm'
import ProductListForm from '../components/product/ProductListForm'

const ProductViewNew = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6"><ProductCreateForm /></div>
        <div className="col-6"><ProductListForm /></div>
      </div>
    </div>
  )
}

export default ProductViewNew