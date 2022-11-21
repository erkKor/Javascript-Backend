import React from 'react';
import './App.css';
import TodoProvider  from './contexts/TodoContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductContext';
// import UserContext from './contexts/UserContext'

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import CategoriesView from "./views/CategoriesView"
import ContactView from "./views/ContactView";
import SearchView from "./views/SearchView"
import CompareView from "./views/CompareView"
import NotFoundView from "./views/NotFoundView";
import UserProvider from './contexts/UserContext';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <TodoProvider>
      <UserProvider>
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
        <Route path="*" element={<NotFoundView />}/>
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
      </UserProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;





