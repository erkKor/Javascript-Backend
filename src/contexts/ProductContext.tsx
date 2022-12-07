import React, { createContext, useContext, useState } from 'react'
import { Product, ProductRequest } from '../models/ProductModel'

export interface IProductContext{
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    create: (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getTag: (tag:string) => void
    getTagFeatured: () => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    removeItem: (articleNumber: string) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

export const ProductProvider = ({children}: any) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = { articleNumber:'', name: '', category: '', tag: '', price:0, rating:0, imageName: '' }
    const productRequest_default: ProductRequest = { name: '', category: '', tag: '', price:0, rating:0, imageName: '' }

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accesToken')}`
            },
            body: JSON.stringify(productRequest)
        })
        if (result.status === 201){
            setProductRequest(productRequest_default)
            const _product = await result.json()
            
            setProducts(prevProducts => {
                return [...prevProducts, _product]
            })
        }else{
            console.log('error')
            console.log(localStorage)
        }
    }

    const get = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/details/${articleNumber}`)
        if (result.status === 200)
            setProduct(await result.json()) 
    }

    const getTagFeatured = async () => {
        const tagUrl = 'http://localhost:5000/api/products/featured'
        const result = await fetch(`${tagUrl}`)
        if (result.status === 200)
            setProducts(await result.json()) 
    }
    
    const getTag = async (tag:string) => {
        const result = await fetch(`${baseUrl}/${tag}`)
        if (result.status === 200)
            setProducts(await result.json()) 
    }
    
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setProducts(await result.json()) 
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/details/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accesToken')}`
            },
            body: JSON.stringify(product)
        })
        if (result.status === 200)
            setProduct(await result.json())
    }

    const removeItem = async (articleNumber:string) => {
        const result = await fetch(`${baseUrl}/details/${articleNumber}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accesToken')}`
            },
        })

        if (result.status === 200){
            setProducts(productsVADSOM => {
                return productsVADSOM.filter(productHEHE => productHEHE.articleNumber !== articleNumber)
                
            })
        }
    }

    
  return (
    <ProductContext.Provider value={{product, setProduct, productRequest, setProductRequest, products, create, get, getTag, getTagFeatured, getAll, update, removeItem}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider