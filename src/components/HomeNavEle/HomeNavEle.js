import React from 'react'

import './HomeNavEle.css'

export default function Home_nav_ele(props) {
  return (
    <a href={ props.url }>
      <div className='HomeNavEle'>
        <p>{ props.name }</p>
      </div>
    </a>
  )
}
