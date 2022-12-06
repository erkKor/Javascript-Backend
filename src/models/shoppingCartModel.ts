import { Product } from "./ProductModel"

export interface CartItem {
    articleNumber: string
    quantity: number
    product: Product
}