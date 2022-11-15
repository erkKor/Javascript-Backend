import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView.tsx";
import ProductDetailsView from "./views/ProductDetailsView";
import CategoriesView from "./views/CategoriesView"
import ContactView from "./views/ContactView";
import SearchView from "./views/SearchView"
import CompareView from "./views/CompareView"
import WishlistView from "./views/WishlistView"
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/Products" element={<ProductsView/>}/>
        <Route path="/Products/:id" element={<ProductDetailsView />}/>
        <Route path="/Categories" element={<CategoriesView />}/>
        <Route path="/Contacts" element={<ContactView />}/>
        <Route path="/Search" element={<SearchView />}/>
        <Route path="/Compare" element={<CompareView />}/>
        <Route path="/Wishlist" element={<WishlistView />}/>
        <Route path="*" element={<NotFoundView />}/>
      </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;





/* 
const [products, setProducts] = useState({
    all: [],
    featuredProducts: [],
    squareProducts: []
  })

  useEffect(() => {
    const fetchAllProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts();

    const fetchFeaturedProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts();

    const fetchSquareProducts = async () =>{
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, squareProducts: await result.json()})
    }
    fetchSquareProducts();

  }, [setProducts])
*/