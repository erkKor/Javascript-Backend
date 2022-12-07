import React, { useState } from 'react'
import CreateForm from '../components/EXPRESS/CreateForm'
import LoginForm from '../components/EXPRESS/LoginForm'
import UserList from '../components/EXPRESS/UserList'
import Navbar from '../components/Navbar'

const UserView: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
    <Navbar headerType='header-light'/>
    <CreateForm />
    <UserList />
    <LoginForm />
    </>
  )
}

export default UserView