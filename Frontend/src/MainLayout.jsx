import React from 'react'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import App from './App'
import { Outlet } from 'react-router'



const MainLayout = ({user}) => {
  return (
    <div>
        <Navbar user={user}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout