import React from 'react'

import './Header.css'

import Dados from '../../assets/dados.png'
import User from '../../assets/user.png'

export default function Header() {
  return (
    <header>
      <div className="header__brand">
        <a href="/">
          <div className="header__logo">
            <img src={Dados} alt="" />
          </div>
          <div className="header__name">
            <p>
              Juan F. Martínez - <span>The Data Scientist</span>
            </p>
          </div>
        </a>
      </div>
      <div className="header__users">
        <a href="/">
          <div className="header__users__icon">
            <img src={User} alt="" />      
          </div>
        </a>
      </div>
    </header>
  )
}
