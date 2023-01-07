import React from 'react'

import './SocialIcon.css'

export default function SocialIcon(props) {
  return (
    <a href={props.url} target='_blank'>
        <div className='SocialIcon'>
            <img src={ props.imagen } alt="" />
        </div>
    </a>

  )
}
