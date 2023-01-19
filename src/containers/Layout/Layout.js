import React from 'react'
import Footer from '../Footer/Footer'

import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'

export default function Layout({ children }) {
  return (
    <div>
        <Header/>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}
