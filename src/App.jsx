import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'
import AddProduct from './page/AddProduct'

function App() {
 
  return (
  <>
    <BrowserRouter>
     {/* navbar */}
     <Navbar/>
     <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/addProduct' element = {<AddProduct/>} />
      
     </Routes>

     </BrowserRouter>

    
  </>
  )
}

export default App
