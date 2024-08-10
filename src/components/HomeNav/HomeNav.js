import React from 'react'
import { Link } from 'react-router-dom'

import './HomeNav.css'

export default function HomeNav() {
  return (
    
    <div className='homenav'>
        <Link to='/Projects'>Proyectos</Link>
        <Link to='/Experiencia'>Experiencia</Link>
        <Link to='/SobreMi '>Sobre mi</Link>
        <Link to='/Contacto'>Contacto</Link>
    </div>
  )
}
