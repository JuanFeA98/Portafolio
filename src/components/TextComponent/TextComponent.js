import React from 'react'

import './TextComponent.css'

export default function TextComponent({ children }) {
  return (
    <div className='TextComponent'>
        {children}
    </div>
  )
}
