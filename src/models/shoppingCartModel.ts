import { Url } from "url"
import { Product } from "./ProductModel"

export interface CartItem {
    articleNumber: number
    quantity: number
    product: Product
}