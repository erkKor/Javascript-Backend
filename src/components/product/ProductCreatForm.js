import React, { useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
import { NavLink } from 'react-router-dom'

const GET_VENDORS_QUERY = gql`{vendors { _id, name}}`
const POST_PRODUCT_QUERY = gql
`
mutation AddProduct($name: String!, $category: String!, $tag: String!, $price: String!, $rating: String!, $vendorId: ID!) {
  addProduct(name: $name, category: $category, tag: $tag, price: $price, rating: $rating, vendorId: $vendorId) {
    name
  }
}
`

const ProductCreatForm = () => {
  const default_value = {name: '', category: '', tag: '', price: '', rating: '', vendorId: '0' }
  const [product, setProduct] = useState(default_value)
  const {loading, error, data} = useQuery(GET_VENDORS_QUERY)
  const [addProduct] = useMutation(POST_PRODUCT_QUERY)
  
  const populateVendors = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Error fel</option>
    return data.vendors.map(vendor => <option key={vendor._id} value={vendor._id}>{vendor.name}</option>)
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product)
    addProduct({variables: product})
    
    setProduct(default_value)
  }
  return (

    <>
    <NavLink to="/" end>Home</NavLink>
    
    <form onSubmit={handleSubmit} className="container ">
      <h5>Lägg till Product</h5>
      <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product namn"></input>
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product kategori"></input>
      <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product tag"></input>
      <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product price"></input>
      <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product rating"></input>

      <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className="form-select mb-3" type="text">
        <option value="0" disabled>Välj en vendor</option>
        {populateVendors()}
      </select>
      <button className="btn btn-secondary px-5 py-2" type="submit">SAVE</button>
    </form>
    </>
  )
}

export default ProductCreatForm