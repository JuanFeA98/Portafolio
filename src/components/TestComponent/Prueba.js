import React from 'react'
import './Prueba.css'
import { Link } from 'react-router-dom'

export default function Prueba() {
  return (
    <div className='Prueba'>
        <div>Prueba</div>
        <p>Hello, React! Again!</p>
        <Link to='/'>Go Home</Link>
    </div>

  )
}