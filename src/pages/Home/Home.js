import React from 'react'

import './Home.css'

import HomeNavEle from '../../components/HomeNavEle/HomeNavEle.js'

import Foto from '../../assets/Foto.png'

export default function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <div className="home__img">
          <img src={ Foto } alt="Imagen" />
        </div>
        <div className="home__nav">
          <HomeNavEle name='Prueba 1' url='/'/>
          <HomeNavEle name='Prueba 2'/>
          <HomeNavEle name='Prueba 3'/>
          <HomeNavEle name='Prueba 4'/>
        </div>
      </div>
    </div>
  )
}
