import React from 'react'
import CreateForm from '../components/EXPRESS/CreateForm'
import UserList from '../components/EXPRESS/UserList'
import Navbar from '../components/Navbar'

const UserView: React.FC = () => {
  return (
    <>
    <Navbar headerType='header-light'/>
    <CreateForm />
    <UserList />
    </>
  )
}

export default UserView