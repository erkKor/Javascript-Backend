// import { createContext, useContext, useState } from "react";

// export interface ProductContextType{
//     product: {}
//     products: any[]
//     getProducts: () => Promise<void>
//     getProduct: (articleNumber: any) => Promise<void>
// }

// export const ProductContext = createContext<ProductContextType | null>(null)

// export const useProductContext = () =>{
//     return useContext(ProductContext)
// }

// export const ProductProvider = ({children}: any) => {
//     const url = 'https://win22-webapi.azurewebsites.net/api/products'
//     const [product, setProduct] = useState({})
//     const [products, setProducts] = useState<any[]>([])

//     const getProducts = async () =>{
//         const res = await fetch(url)
//         setProducts(await res.json())
//     }

//     const getProduct = async (articleNumber: any) => {
//         const res = await fetch(url + `/${articleNumber}`)
//         setProduct(await res.json())
//     }

//     return <ProductContext.Provider value={{product, products, getProducts, getProduct}}>
//         {children}
//     </ProductContext.Provider>
// }