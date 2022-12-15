import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'

const GET_PRODUCTS_QUERY = gql`{products { _id, name, category, tag, price, rating, vendor {name}}}`

const ProductListForm = () => {
const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY)

console.log(data.products)
if (loading) return <p>Laddar...</p>
if (error) return <p>Error... : {error.message}</p>

  return (
    <div>
      <h5></h5>
      {
        data.products.map(product => (<div key={product._id}>{product.vendor.name} {product.name}</div>))
      }
    </div>
  )
}

export default ProductListForm