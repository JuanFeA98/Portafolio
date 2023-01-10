import React from 'react'
import ThemeHeader from '../../components/ThemeHeader/ThemeHeader.js'

import './Proyectos.css'

import DataScience from '../../assets/ds.png' 
import ThemeBody from '../../components/ThemeBody/ThemeBody.js'

export default function Proyectos() {
  return (
    <div className='proyectos'>
      <ThemeHeader theme='Data Science' image='https://bit.ly/3XesdEk' icon={ DataScience }/>
      <ThemeBody/>
    </div>
  )
}
