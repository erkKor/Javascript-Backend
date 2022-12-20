 import React from 'react'
 import { useQuery } from '@apollo/client'
 import { GET_VENDORS_QUERY } from '../../queries/productQueries'

const VendorList = () => {
  const {loading, error, data} = useQuery(GET_VENDORS_QUERY)
    if (loading) return <p>Laddar...</p>
    if (error) return <p>Error... : {error.message}</p>
    
   return (
    <div>
      <h3>Current brands</h3>
      {
        data.vendors.map(vendor => (<div key={vendor._id}>{vendor.name}</div>))
      }
  </div>
   )
 }
 
 export default VendorList