import React from 'react';
import './App.css';
import TodoProvider  from './contexts/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
// import { ProductProvider } from './contexts/ProductContext';
import { ProductProvider } from './contexts/ProductContext';
import { WishlistProvider } from './contexts/WishlistContext'
// import UserProvider from './contexts/UserContext'

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import CategoriesView from "./views/CategoriesView"
import ContactView from "./views/ContactView";
import SearchView from "./views/SearchView"
import CompareView from "./views/CompareView"
import NotFoundView from "./views/NotFoundView";
import ManageView from './views/ManageView';
import AddProductView from './views/AddProductView';
import UpdateProductsView from './views/UpdateProductView';
import UserProvider from './contexts/UserContext';
import UserView from './views/UserView';
import WishlistView from './views/WishlistView';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
      <UserProvider>
      <ShoppingCartProvider>
      <WishlistProvider>
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
        <Route path="/Manage" element={<ManageView />}/>
          <Route path="/Manage/Create" element={<AddProductView />}/>
          <Route path="/Manage/:id" element={<UpdateProductsView />}/>
        <Route path="/User" element={<UserView />}/>
        <Route path="*" element={<NotFoundView />}/>
        </Routes>
      </ProductProvider>
      </WishlistProvider>
      </ShoppingCartProvider>
      </UserProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;





