
// Hämta användare
export interface Product{
    articleNumber: string,
    name: string,
    category: string,
    tag: string,
    price: number,
    rating: number,
    imageName?: string
}

//Skapa användare
export interface ProductRequest{
    name: string,
    category: string,
    tag: string,
    price: number,
    rating: number,
    imageName?: string
}