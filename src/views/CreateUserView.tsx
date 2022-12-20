import React from 'react'
import CreateForm from '../components/EXPRESS/CreateForm'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'

const CreateUserView: React.FC = () => {
  return (
    <>
    <Navbar headerType='header-light'/>
    <Breadcrumb currentPage="Create User"/>
    <CreateForm />
    <Footer />
    </>
  )
}

export default CreateUserView