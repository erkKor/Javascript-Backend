import React, { useState } from 'react'
import LoginForm from '../components/EXPRESS/LoginForm'
import Filler from '../components/Filler'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'

const UserView: React.FC = () => {
  return (
    <>
    <Navbar headerType='header-light'/>
    <Breadcrumb currentPage="Login"/>
    <LoginForm />
    <Filler />
    <Footer />
    </>
  )
}

export default UserView