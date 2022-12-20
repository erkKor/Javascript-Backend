import React from 'react'
import { NavLink } from 'react-router-dom'
import { IUserContext, UserContext } from '../../contexts/UserContext'

const LoginForm = () => {
  const { userRequest, setUserRequest, signIn } = React.useContext(UserContext) as IUserContext

  return (
    <form onSubmit={signIn} className="d-grid mb-5 create">
      <h3>Login </h3>
        <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter an email"/>
        <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="password" className="form-control py-2 mb-3" placeholder="Enter a password"/>
        <button type="submit" className="button-theme">Log in</button>
        <NavLink to="/User/Create" end>Dont have an account? Sign up here!</NavLink>
    </form>
  )
}

export default LoginForm