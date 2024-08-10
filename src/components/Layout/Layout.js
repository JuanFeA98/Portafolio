import React from 'react'

import Header from '../Header/Header'
import Particulas from '../Particulas/Particulas'

export default function Layout({ children }) {
  return (
    <div>
        <Header/>
        {children}
        <Particulas/>
    </div>
  )
}