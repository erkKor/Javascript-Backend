// Hämta användare
export interface User{
    userID: number
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