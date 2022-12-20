import { Product, GraphQLProduct } from "./ProductModel"

export interface WishlistItem {
    articleNumber: string
    quantity: number
    product: GraphQLProduct
}