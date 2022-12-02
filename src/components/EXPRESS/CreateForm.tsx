import React from 'react'
import { IUserContext, UserContext } from '../../contexts/UserContext'

const CreateForm = () => {
  const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext

  return (
    <form onSubmit={create} className="d-grid mb-5 create">
      <h3>Create User</h3>
        <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a firstname"/>
        <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter a lastname"/>
        <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter an email"/>
        <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="password" className="form-control py-2 mb-3" placeholder="Enter a password"/>
        <button type="submit" className="button-theme">Create User</button>
    </form>
  )
}

export default CreateForm