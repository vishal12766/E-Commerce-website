import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/footer'
import { Routes,BrowserRouter,Route } from 'react-router'
import Flavors from './Pages/Flavors'
import About from './Pages/About'
import Event from './Pages/Event'
import Book from './Pages/Book'
import Order from './Pages/Order'
import ProductProvider from './Contexts/ProductProvider'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import MainLayout from './MainLayout'




const App = () => {
  return (
    <>
      <ProductProvider>
        
        <BrowserRouter>
        
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/Gelato' element={<Homepage/>}/>
              <Route path='/Gelato/flavors' element={<Flavors/>}/>
              <Route path='/Gelato/about' element={<About/>}/>
              <Route path='/Gelato/event' element={<Event/>}/>
              <Route path='/Gelato/book' element={<Book/>}/>
              <Route path='/Gelato/order' element={<Order/>}/>
            </Route>
              <Route path="/Gelato/login" element={<Login />} />
              <Route path="/Gelato/signup" element={<Signup />} />
          </Routes>
      </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App