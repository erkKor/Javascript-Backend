// Hämta användare
export interface User{
    id: number
    firstName: string
    lastName: string
    email: string
}

//Skapa användare
export interface UserRequest{
    firstName: string
    lastName: string
    email: string
    password: string
}