import { Product } from "./ProductModel"

export interface WishlistItem {
    articleNumber: number
    quantity: number
    product: Product
}