import React from 'react'
import ThemeHeader from '../../components/ThemeHeader/ThemeHeader.js'

import './Proyectos.css'

import DataScience from '../../assets/ds.png' 
import ThemeBody from '../../components/ThemeBody/ThemeBody.js'
import TextComponent from '../../components/TextComponent/TextComponent.js'
import CodeComponent from '../../components/CodeComponent/CodeComponent.js'

export default function Proyectos() {
  return (
    <div className='proyectos'>
      <ThemeHeader theme='Data Science' image='https://bit.ly/3XesdEk' icon={ DataScience }/>
      <ThemeBody>
          <h2 className='Title'>
            Lorem Ipsum
          </h2>
          <p className='SubTitle'>
            Data Science / Web Scraping
          </p>
        <TextComponent>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet, delectus pariatur itaque asperiores quasi numquam culpa eligendi recusandae aperiam nam, maiores perspiciatis! Nisi ex unde cumque labore consectetur temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus praesentium fugit velit expedita nesciunt, ad, nobis voluptatibus quibusdam corrupti similique porro architecto rem veniam officiis iste aliquam sit vel.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet, delectus pariatur itaque asperiores quasi numquam culpa eligendi recusandae aperiam nam, maiores perspiciatis! Nisi ex unde cumque labore consectetur temporibus?</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet, delectus pariatur itaque asperiores quasi numquam culpa eligendi recusandae aperiam nam, maiores perspiciatis! Nisi ex unde cumque labore consectetur temporibus?</p>
        </TextComponent>
        <CodeComponent>
          <p>
            <span className='function_type'>print</span>
             ("Hello, world!")
          </p>
          <p style={{marginLeft: '20px'}}>
            Hello, world!
          </p>
          <p>{'>'}</p>
        </CodeComponent>
        <TextComponent>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet, delectus pariatur itaque asperiores quasi numquam culpa eligendi recusandae aperiam nam, maiores perspiciatis! Nisi ex unde cumque labore consectetur temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus praesentium fugit velit expedita nesciunt, ad, nobis voluptatibus quibusdam corrupti similique porro architecto rem veniam officiis iste aliquam sit vel.</p>
          <br/>
          </TextComponent>
      </ThemeBody>
    </div>
  )
}
