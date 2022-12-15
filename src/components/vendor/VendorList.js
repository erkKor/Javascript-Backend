 import React from 'react'
 import { useQuery, useMutation, gql } from '@apollo/client'
 
 const GET_VENDORS_QUERY = gql`{vendors { _id, name}}`

 

 const VendorList = () => {
  const {loading, error, data} = useQuery(GET_VENDORS_QUERY)

if (loading) return <p>Laddar...</p>
if (error) return <p>Error... : {error.message}</p>
   return (
    <div>
    <h5></h5>
    {
      data.vendors.map(vendor => (<div key={vendor._id}>{vendor.name}</div>))
    }
  </div>
   )
 }
 
 export default VendorList