import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
        <div>Header</div>
        <p>Hello, React! Again!</p>
        <Link to='/'>Go Home</Link>
    </div>

  )
}
