import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

export const useProductContext = () =>{
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState ({})
    const [products, setProducts] = useState ([])
    // const [featured, setFeatured] = useState ([])
    // const [square, setSquare] = useState ([])
    // const [tripple, setTripple] = useState ([])

    const getProducts = async () =>{
        const res = await fetch(url)
        setProducts(await res.json())
    }
    
    // const getFeaturedProducts = async (take = 0) =>{
    //     const res = await fetch (url + `?take=${take}`)
    //     setFeatured(await res.json())
    // }

    // const getSquareProducts = async (take = 0) =>{
    //     const res = await fetch (url + `?take=${take}`)
    //     setSquare(await res.json())
    // }

    // const getTrippleProducts = async (take = 0) =>{
    //     const res = await fetch (url + `?take=${take}`)
    //     setTripple(await res.json())
    // }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, products,  getProducts, getProduct}}>
        {children}
    </ProductContext.Provider>
}