
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

//Skapa användare
export interface ProductRequest{
    name: string,
    category: string,
    tag: string,
    price: number,
    rating: number,
    imageName?: string
}