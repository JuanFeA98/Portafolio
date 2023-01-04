import React from 'react'

import './Header.css'

import Dados from '../../assets/dados.png'

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
              Juan Martínez - <span>The Data Scientist</span>
            </p>
          </div>
        </a>
      </div>
      <div className="header__users">
        <a href="/">
          <div className="header__users__icon">
          </div>
        </a>
      </div>
    </header>
  )
}
