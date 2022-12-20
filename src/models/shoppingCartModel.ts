import { Product, GraphQLProduct } from "./ProductModel"

export interface CartItem {
    articleNumber: string
    quantity: number
    product: GraphQLProduct
}