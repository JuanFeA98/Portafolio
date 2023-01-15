import React from 'react'

import './ThemeBody.css'

export default function ThemeBody({children}) {
  return (
    <div className='ThemeBody'>
        <div className="ThemeBody__Articles">
          { children }
        </div>
        <div className="ThemeBody__Topics">
            <h3>Temas</h3>
            <ul>
                <li><a href='/'>Web Scraping</a></li>
                <li><a href='/'>Exploración Analítica de Datos</a></li>
                <li><a href='/'>Machine Learning</a></li>
                <li><a href='/'>Diseño de Base de datos</a></li>
                <li><a href='/'>Deploy</a></li>
            </ul>
        </div>
    </div>
  )
}
