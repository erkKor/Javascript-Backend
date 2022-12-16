import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { validateProducts } from '../../assets/scripts/validation'
import { useQuery, useMutation, gql } from '@apollo/client'
import { GET_VENDORS_QUERY, GET_PRODUCT_QUERY, UPDATE_MUTATION } from '../../queries/productQueries'

// const UPDATE_MUTATION = gql`
// mutation my_UpdateProduct($id: ID!, $name: String!, $category: String!, $tag: String!, $price: String!, $rating: String!) {
//   updateProduct(id: $id, name: $name, category: $category, tag: $tag, price: $price, rating: $rating) {
//     name
//   }
// }`

// const GET_PRODUCT_QUERY = gql`
//   query Product($id: ID!) {
//     product(id:$id) {
//       _id,
//       name, 
//       category, 
//       tag,
//       price, 
//       rating, 
//       vendor {
//         name
//       }
//     }
//   }
//   `

const UpdateProducts = ({idNumber, productData}) => {
  
  // console.log(idNumber)
  // console.log(productData)
  

  // const default_value = {name: '', category: '', tag: '', price: '', rating: '', vendorId: '0' }
  const [product, setProduct] = useState(productData)
  const {loading: loadingVendor, error: errorVendor, data: dataVendor} = useQuery(GET_VENDORS_QUERY)
  const [updateProduct] = useMutation(UPDATE_MUTATION, {
    refetchQueries: [{query: GET_PRODUCT_QUERY, variables: {id: idNumber}}]
  })

  const populateVendors = () => {
    if (loadingVendor) return <option disabled>Laddar...</option>
    if (errorVendor) return <option disabled>Error fel</option>
    return dataVendor.vendors.map(vendor => <option key={vendor._id} value={vendor._id}>{vendor.name}</option>)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    updateProduct({variables: {id:product._id, 
      name:product.name,
      category: product.category,
      tag: product.tag,
      price: product.price,
      rating: product.rating,
      imageName: product.imageName,
      vendorId: product.vendorId
    }})
    
    // setProduct(default_value)
  }

  return (
    <form onSubmit={handleSubmit} className="d-grid mb-5 mt-5 create">
      <h5>Lägg till Product</h5>
      <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product namn"></input>
      <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product kategori"></input>
      <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product tag"></input>
      <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product price"></input>
      <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange product rating"></input>
      <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} className="form-control mb-3" type="text" placeholder="Ange bild"></input>

      <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className="form-select mb-3" type="text">
        <option value="0" disabled>Välj en vendor</option>
        {populateVendors()}
      </select>
      <button className="button-theme" type="submit">Add Product</button>
    </form>
  )
}

export default UpdateProducts