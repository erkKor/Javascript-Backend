import React, { createContext, useContext, useState } from 'react'
import { User, UserRequest } from '../models/UserModel'

interface 

const UserProvider = () => {
  return (
    <UserContext.Provider>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider