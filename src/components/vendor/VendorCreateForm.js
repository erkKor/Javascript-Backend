import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { NavLink } from 'react-router-dom'

const POST_VENDOR_QUERY = gql
`
mutation AddVendor($name: String!) {
  addVendor(name: $name) {
    _id,
    name
  }
}
`


const VendorCreateForm = () => {
  const [vendor, setVendor] = useState('')
  const [addVendor] = useMutation(POST_VENDOR_QUERY)

  const handleSubmit = (e) => {
    e.preventDefault()

    addVendor({variables: {name: vendor}})

    setVendor('')
  }

  return (
  
    <>
    <NavLink to="/" end>Home</NavLink>
    <form onSubmit={handleSubmit} className="container ">
      <h5>Lägg till vendor</h5>
      <input value={vendor} onChange={(e) => setVendor(e.target.value)} className="form-control mb-3" type="text" placeholder="Ange vendor namn"></input>
      <button className="btn btn-secondary px-5 py-2" type="submit">SAVE</button>
    </form>
    </>
  )
}

export default VendorCreateForm