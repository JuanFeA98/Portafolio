import React from 'react'

import './Header.css'

import HeaderImg from '../../assets/icons/zorro.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <Link className='header__content' to='/'>
            <div className='header__icon'>
                <img src={HeaderImg} alt='Icon Page'/>
            </div>

            <div className='header__name'>
                <h2>JuanFe Martinez</h2>
            </div>
        </Link>
    </div>
  )
}
