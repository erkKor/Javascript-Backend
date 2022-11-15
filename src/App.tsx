import React from 'react';
import './App.css';
import TodoProvider  from './contexts/TodoContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ProductProvider } from './contexts/ProductContext';

import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import CategoriesView from "./views/CategoriesView"
import ContactView from "./views/ContactView";
import SearchView from "./views/SearchView"
import CompareView from "./views/CompareView"
import NotFoundView from "./views/NotFoundView";



const App: React.FC = () => {

  return (
    <BrowserRouter>
      <TodoProvider>
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
        {/* <div className="d-flex justify-content-center mt-3">
          <div className="">
            <h1>Todo List</h1>
            <InputForm />
            <TodoList />
          </div>
        </div> */}
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;





