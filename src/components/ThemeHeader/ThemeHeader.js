import React from 'react'

import './ThemeHeader.css'

export default function ThemeHeader(props) {
    return (
    <div className='ThemeHeader' style={{ backgroundImage: `url(${props.image})` }}>
        <div className="ThemeDetail">
            <div className="ThemeIcon">
                <img src={ props.icon } alt="" />
            </div>
            <div className="ThemeTitle">
                <h2>
                    {props.theme}
                </h2>
            </div>
        </div>
    </div>
  )
}
