import { createContext, useContext, useState } from "react";
import { WishlistItem } from "../models/WishlistModel";

export interface WishlistContextType{
    wishlistItems: WishlistItem[]
    wishlistQuantity: number
    getItemQuantity: (articleNumber: number) => any
    addOrRemoveWishlistItem: (wishlistItem: WishlistItem) => void
    removeItem: (articleNumber: number) => void
}

export const WishlistContext = createContext<WishlistContextType | null>(null)

export const useWishlist = () =>{
    return useContext(WishlistContext)
}

export const WishlistProvider = ({children}: any) => {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

    const wishlistQuantity = wishlistItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: number) =>{
        return wishlistItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const addOrRemoveWishlistItem = (wishlistItem: WishlistItem) => {
        const {articleNumber, product} = wishlistItem

        setWishlistItems(items => {
            if( items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1}]
            } 
            else{
            setWishlistItems(items => {
                return items.filter(item => item.articleNumber !== articleNumber)})
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

    // const addOrRemoveWishlistItemTEST = (wishlistItem: WishlistItem) => {
    //     const {articleNumber, product} = wishlistItem

    //     setWishlistItems(items => {
    //         if( items.find(item => item.articleNumber === articleNumber) == null) {
    //             return [...items, { articleNumber, product, quantity: 1}]
               
    //         } else if( items.find(item => item.articleNumber === articleNumber)){
    //             // setWishlistItems(items =>          
    //             return items.filter(item => item.articleNumber !== articleNumber), [...items, {articleNumber, product, quantity: 0}]
    //         }
    //         })
    //     }
            // return items.map(item => {
            //         if (item.articleNumber === articleNumber) {
            //             // console.log(item)
            //             // console.log(items)
                        
            //             // return {...item}
            //             return {...item, quantity: item.quantity -1}
                        
            //         } else{
                        
            //             return item
            //         }
            //     })
            
        
    


    const removeItem = (articleNumber: number) =>{
        setWishlistItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <WishlistContext.Provider value={{wishlistItems, wishlistQuantity, getItemQuantity, addOrRemoveWishlistItem, removeItem}}>
        {children}
    </WishlistContext.Provider>
}