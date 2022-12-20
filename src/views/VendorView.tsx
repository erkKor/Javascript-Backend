import React from 'react'
import VendorList from '../components/vendor/VendorList'
import VendorCreateForm from '../components/vendor/VendorCreateForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const VendorView = () => {
  return (
    <>
     <Navbar headerType='header-light'/>
     <section className="breadcrumb">
       <div className="container">
          <ul className="breadcrumb-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Manage">Manage</NavLink></li>
              <li>Update Product</li>
          </ul>
      </div>
     </section>
     <div className="_container vendor mt-5">
        <VendorCreateForm />
        <VendorList />
    </div>
     <Footer />
    </>
  )
}

export default VendorView