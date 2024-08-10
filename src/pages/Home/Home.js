import React from 'react'

import './Home.css'
import Image from '../../assets/icons/zorro.png'

import HomeNav from '../../components/HomeNav/HomeNav'
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks'

export default function Home() {
  return (
    <div>
        <div className='home'>
          <div className='home__profile'>
            <img src={Image} alt='Profile'/>
            <div className='home__profile__name'>
              <h1>JuanFe Martinez</h1>
              <h2>FullStack Data Scientist</h2>
            </div>
            <SocialNetworks/>
          </div>
          <div className='home__nav'>
            <HomeNav/>
          </div>
        </div>
    </div>
)
}