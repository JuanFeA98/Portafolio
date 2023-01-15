import React from 'react'

import './CodeComponent.css'

export default function CodeComponent({ children }) {
  return (
    <div className='CodeComponent'>
        <div className="CodeComponent__Header">
            <div className="CodeComponent__Header--Deco"></div>
            <div className="CodeComponent__Header--Deco"></div>
            <div className="CodeComponent__Header--Deco"></div>
        </div>
        <div className="CodeComponent__Body">
            { children }
        </div>

    </div>
  )
}
