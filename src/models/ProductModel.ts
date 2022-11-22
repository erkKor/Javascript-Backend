import { Url } from "url"

// Hämta användare
export interface Product{
    articleNumber: number,
    name: string,
    category: string,
    price: number,
    rating: number,
    imageName?: string
}

//Skapa användare
export interface ProductRequest{
    name: string,
    category: string,
    price: number,
    rating: number,
    imageName?: string
}