import React from 'react'
import Navbar from './Components/navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/footer'
import { Routes,BrowserRouter,Route, Navigate } from 'react-router-dom'
import Flavors from './Pages/Flavors'
import About from './Pages/About'
import Event from './Pages/Event'
import Book from './Pages/Book'
import Order from './Pages/Order'
import ProductProvider from './Contexts/ProductProvider'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import MainLayout from './MainLayout'
import Cart from './Pages/Cart'
import CartProvider from './Contexts/CartProvider'





const App = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
        <BrowserRouter>
          <Routes>
            
            <Route element={<MainLayout />}>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/flavors' element={<Flavors/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/event' element={<Event/>}/>
              <Route path='/book' element={<Book/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
      </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App