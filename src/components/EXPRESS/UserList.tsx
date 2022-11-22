import React, { useEffect } from 'react'
import {IUserContext, UserContext} from '../../contexts/UserContext'
import { User } from '../../models/UserModel'

const UserList = () => {
  const {users, getAll, remove} = React.useContext(UserContext) as IUserContext
  
  useEffect(() => {
    getAll()
    
    
  }, [getAll])

  const removeUser = (id:number) => {
    remove(id)
  }

  return (
    <>
    <h3>List of Users</h3>
    {
      // users.map((user: User) => (<div onClick={() => removeUser(user.id)} key={user.id} className="mb-3">{user.firstName} {user.lastName}</div>))
      users.map((user: User) => (<div key={user.id} className="mb-3">{user.firstName} {user.lastName}</div>))
    }
    </>
  )
}

export default UserList