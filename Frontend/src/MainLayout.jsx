import React from 'react'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import App from './App'
import { Outlet } from 'react-router'



const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout