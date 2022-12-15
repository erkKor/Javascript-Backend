import React from 'react'
import VendorList from '../components/vendor/VendorList'
import VendorCreateForm from '../components/vendor/VendorCreateForm'

const VendorView = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6"><VendorCreateForm /></div>
        <div className="col-6"><VendorList /></div>
      </div>
    </div>
  )
}

export default VendorView