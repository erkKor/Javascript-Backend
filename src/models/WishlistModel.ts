import { Product } from "./ProductModel"

export interface WishlistItem {
    articleNumber: string
    quantity: number
    product: Product
}