
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

export interface GraphQLProduct{
    _id: string,
    name: string,
    category: string,
    tag: string,
    price: string,
    rating: string,
    imageName?: string,
    __typename?: string,
    vendor?: {}
}

export interface Vendor{
    id: string,
    name: string
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