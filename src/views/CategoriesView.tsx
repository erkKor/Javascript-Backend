import React from 'react'
import CreateForm from '../components/EXPRESS/CreateForm'
import UserList from '../components/EXPRESS/UserList'
import Filler from '../components/Filler'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'

const CategoriesView = () => {
  return (
    <>
    <Navbar headerType="header-light"/>
    {/* <Breadcrumb currentPage="Categories"/>
    <Filler />
    <Footer /> */}
    <CreateForm />
    <UserList />
    </>
  )
}

export default CategoriesView