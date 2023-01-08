import React from 'react'

import './Home.css'

import HomeNavEle from '../../components/HomeNavEle/HomeNavEle.js'
import SocialIcon from '../../components/SocialIcon/SocialIcon'

import Foto from '../../assets/Foto.png'
import Linkedin from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import Twitter from '../../assets/twitter.png'

export default function Home() {
  return (
    <div className='Home'>
      <div className="container">
        <div className="home__img">
          <img src={ Foto } alt="Imagen" />
        </div>
        <div className="home__nav">
          <div className="home__nav__name">
            <p>Hi! I'm</p>
            <h2>Juan F. Martínez</h2>
            <span>Data Scientist</span>
          </div>
          <div className="home__nav__options">
            <HomeNavEle name='Download CV'/>
            <HomeNavEle name='Projects' url='/Proyectos'/>
            <HomeNavEle name='Blog'/>
            <HomeNavEle name='Contact'/>
          </div>
          <div className="home__nav__social">
            <SocialIcon imagen={ Linkedin } url='https://www.linkedin.com/in/juanfe-martínez/'/>
            <SocialIcon imagen={ GitHub } url='https://github.com/JuanFeA98'/>
            <SocialIcon imagen={ Twitter } url='https://twitter.com/JuanFeAngel98'/>
          </div>
        </div>
      </div>
    </div>
  )
}
