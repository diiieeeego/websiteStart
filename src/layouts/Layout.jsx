import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div>
    <Navbar />
    <main className='min-h-[90vh] max-w-4xl mx-auto px-3 py-12'>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default Layout