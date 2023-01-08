import React from 'react'

import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav>
          <ul>
              <a href="/Proyectos"><li>Proyectos</li></a>
              <a href="/"><li>Blog</li></a>
              <a href="/"><li>Otros</li></a>
          </ul>
      </nav>
      <div className="prueba"></div>
      <div className="projects__detail">
        <ul>
          <a href="/"><li>Hola</li></a>
          <a href="/"><li>Hola</li></a>
          <a href="/"><li>Hola</li></a>
        
        </ul>
      </div>
    </>
  )
}
