import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/footer'
import { Routes,BrowserRouter,Route } from 'react-router'
import Flavors from './Pages/Flavors'
import About from './Pages/About'
import Event from './Pages/Event'
import Book from './Pages/Book'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/flavors' element={<Flavors/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/book' element={<Book/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App