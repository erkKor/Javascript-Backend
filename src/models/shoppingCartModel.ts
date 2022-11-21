import { Url } from "url"

export interface CartItem {
    quantity: number
    product: any
    articleNumber: any
    name: string
    description?: any
    category: string
    price: number
    rating: number
    imageName: Url
}