import React from 'react'

import './NavBar.css'

export default function Proyectos() {
  return (
    // <div className='prueba_nav'>
      <ul className='nav'>
        <li>
          <a href="/Proyectos" className='nav_menu_option'>Proyectos</a>
          <ul>
            <li><a href="/">Data Science</a></li>
            <li><a href="/">Backend</a></li>
            <li><a href="/">Fullstack</a></li>
            <li><a href="/">Frontend</a></li>
          </ul>
        </li>
        <li><a href="/" className='nav_menu_option'>Blog</a>
          <ul>
            <li><a href="/">Submenu1</a></li>
            <li>
              <a href="/">Submenu2</a>
              <ul>
                <li><a href="/">SubSubmenu1</a></li>
                <li><a href="/">SubSubmenu2</a></li>
                <li><a href="/">SubSubmenu3</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className='nav_menu_option'>Otros</a>
          <ul>
            <li><a href="/">Submenu1</a></li>
          </ul>
        </li>
      </ul>
    // </div>
  )
}
