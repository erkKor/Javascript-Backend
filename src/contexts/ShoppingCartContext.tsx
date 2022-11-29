import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from "../models/shoppingCartModel";


export interface ShoppingCartContextType{
    cartItems: CartItem[]
    cartQuantity: number
    getItemQuantity: (articleNumber: number) => any
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void 
    removeItem: (articleNumber: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null)

export const useShoppingCart = () =>{
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}: any) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: number) =>{
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if(items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1}]
            } else{
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        
                        return {...item, quantity: item.quantity + 1}
                        
                    } else{

                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
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
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}