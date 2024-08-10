import React from 'react'

import './SocialNetworks.css'

import Github from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'
import Medium from '../../assets/icons/mediumpng.png'
import { Link } from 'react-router-dom'


export default function SocialNetworks() {
  return (
    <div className='social_networks'>
      <Link to='https://github.com/JuanFeA98'>
        <img src={ Github } alt='Github Logo'/>
      </Link>
      <Link to='https://www.linkedin.com/in/juanfe-martínez/'>
        <img src={ LinkedIn } alt='LinkedIn Logo'/>
      </Link>
      <Link to='https://medium.com/@juanfe98'>
        <img src={ Medium } alt='Medium Logo'/> 
      </Link>
    </div>
  )
}
