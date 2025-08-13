import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import App from '../App'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <App/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout