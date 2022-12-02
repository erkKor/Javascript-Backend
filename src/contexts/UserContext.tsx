import React, { createContext, useContext, useState } from 'react'
import { User, UserRequest } from '../models/UserModel'

export interface IUserContext{
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    userRequest: UserRequest
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id:number) => void
}

export const UserContext = createContext<IUserContext | null>(null)
export const useUserContext = () => { return useContext(UserContext)}

export const UserProvider = ({children}: any) => {
    const baseUrl = 'http://localhost:5000/api/users'
    const user_default: User = {userID:0, firstName: '', lastName: '', email: ''}
    const userRequest_default: UserRequest = {firstName: '', lastName: '', email: '', password: ''}

    const [user, setUser] = useState<User>(user_default)
    const [userRequest, setUserRequest] = useState<UserRequest>(userRequest_default)
    const [users, setUsers] = useState<User[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
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
    const get = async (userID: number) => {
        const result = await fetch(`${baseUrl}/${userID}`)
        if (result.status === 200)
            setUser(await result.json()) 
    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setUsers(await result.json()) 
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${user.userID}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (result.status === 200)
            setUser(await result.json())
        
    }
    const remove = async (userID:number) => {
        const result = await fetch(`${baseUrl}/${userID}`, {
            method: 'delete',
        })

        if (result.status === 204)
            setUser(user_default)
    }

    
  return (
    <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider