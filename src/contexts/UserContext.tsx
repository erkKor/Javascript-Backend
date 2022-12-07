import React, { createContext, useContext, useState } from 'react'
import { User, UserRequest } from '../models/UserModel'

export interface IUserContext{
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    // users: User[]
    create: (e: React.FormEvent) => void
    signIn: (e: React.FormEvent) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

export const UserProvider = ({children}: any) => {
    const baseUrl = 'http://localhost:5000/api/authentication'
    const user_default: User = {userID:0, firstName: '', lastName: '', email: ''}
    const userRequest_default: UserRequest = {firstName: '', lastName: '', email: '', password: ''}

    const [user, setUser] = useState<User>(user_default)
    const [userRequest, setUserRequest] = useState<UserRequest>(userRequest_default)
    // const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = 'http://localhost:5000/api/authentication/signup'

        const result = await fetch(`${url}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(userRequest)
        })
        if (result.status === 201){
            setUserRequest(userRequest_default)
        }else{
            console.log('error')
        }
    }

    const signIn = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = 'http://localhost:5000/api/authentication/signin'

        const result = await fetch(`${url}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })
        if (result.status === 200){
            const data = await result.json()
            console.log(data)
            setUserRequest(userRequest_default)
            localStorage.setItem('accesToken', data.accesToken)
            localStorage.setItem('name', data.name)
            console.log()
        }else{
            console.log('error')
        }
    }
   

    
  return (
    <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, create, signIn}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider