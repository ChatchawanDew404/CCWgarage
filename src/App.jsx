import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import {Routes,Route } from 'react-router-dom'
// import Layouts and components
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Service from './pages/Service'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
import Register from './pages/Register'
import Login from './pages/Login'
import ReadBlog from './layouts/ReadBlog'
import ViewService from './layouts/ViewService'
import ProductCartPage from './layouts/ProductCartPage'
import CheckoutPage from './layouts/CheckoutPage'
import ViewProduct from './layouts/ViewProduct'

function App() {

  return (
    <>
    <NavigationBar/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/service" element={<Service/>}></Route>
     <Route path="/service/viewService" element={<ViewService/>}></Route>
     <Route path="/product" element={<Product/>}></Route>
     <Route path="/blog" element={<Blog/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/blog/readBlog" element={<ReadBlog/>}></Route>
     <Route path="/product/productCartPage" element={<ProductCartPage/>}></Route>
     <Route path="/product/checkoutPage" element={<CheckoutPage/>}></Route>
     <Route path="/product/viewProduct" element={<ViewProduct/>}></Route>
     <Route path="*" element={<Page404/>}></Route>
    </Routes>
    </>
  )
}

export default App
