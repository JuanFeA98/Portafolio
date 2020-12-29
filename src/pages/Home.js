import React, { Component } from 'react';

import '../styles/pages/Home.css'

import Projects from '../components/Projects'
import Hero from "../components/Hero";
import Particle from "../components/Particles"

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <Hero/>
        <Particle/>
        <Projects/>
      </div>
    )
  }
}

export default Home;
