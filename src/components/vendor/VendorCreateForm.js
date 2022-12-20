import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { POST_VENDOR_QUERY, GET_VENDORS_QUERY } from '../../queries/productQueries'

const VendorCreateForm = () => {
  const [vendor, setVendor] = useState('')
  const [addVendor] = useMutation(POST_VENDOR_QUERY, {refetchQueries: [{query: GET_VENDORS_QUERY}]})

  const handleSubmit = (e) => {
    e.preventDefault()
    addVendor({variables: {name: vendor}})

    setVendor('')
  }

  return (
    <form onSubmit={handleSubmit} className="d-grid mb-5 create">
      <h5>Create new brand</h5>
      <input value={vendor} onChange={(e) => setVendor(e.target.value)} className="form-control mb-3" type="text" placeholder="Enter brand name"></input>
      <button className="button-theme" type="submit">Add Brand</button>
    </form>
  )
}

export default VendorCreateForm