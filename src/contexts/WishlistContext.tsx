import { createContext, useContext, useState } from "react";
import { CartItem } from "../models/shoppingCartModel";


export interface WishlistContextType{
    wishlistItems: CartItem[]
    wishlistQuantity: number
    getItemQuantity: (articleNumber: number) => any
    addOrRemoveWishlistItem: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void 
    removeItem: (articleNumber: number) => void
}

export const WishlistContext = createContext<WishlistContextType | null>(null)

export const useWishlist = () =>{
    return useContext(WishlistContext)
}

export const WishlistProvider = ({children}: any) => {
    const [wishlistItems, setWishlistItems] = useState<CartItem[]>([])

    const wishlistQuantity = wishlistItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: number) =>{
        return wishlistItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const addOrRemoveWishlistItem = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setWishlistItems(items => {
            if( items.find(item => item.articleNumber === articleNumber) == null) {
               
                return [...items, { articleNumber, product, quantity: 1}]
               
            } else{
                setWishlistItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
            
        })
            return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        // console.log(item)
                        // console.log(items)
                        
                        // return {...item}
                        return {...item, quantity: item.quantity -1}
                        
                    } else{
                        
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setWishlistItems(items => {
            if(items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else{
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: number) =>{
        
        setWishlistItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <WishlistContext.Provider value={{wishlistItems, wishlistQuantity, getItemQuantity, addOrRemoveWishlistItem, decrementQuantity, removeItem}}>
        {children}
    </WishlistContext.Provider>
}