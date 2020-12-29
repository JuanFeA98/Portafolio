import React, { Component } from 'react';
import Particles from 'react-particles-js';
 
import '../styles/components/Particles.css'

class Particle extends Component{
  
    render(){
        return (
            <Particles  className="Particles"
                        params={{
                            background: {
                                color: {
                                    value: "transparent"
                                },
                            },
                            fpsLimit: 100,
                            interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick:{
                                        enable: true,
                                        mode: "push"
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse"
                                    }
                                },
                                modes: {
                                    repulse:{
                                        distance: 100,
                                        duration: 2
                                    }
                                }
                            },
                            particles: {
                                number: {
                                    value: 20
                                },
                                size:{
                                    value: 2.5
                                }
                            }
                        }} />
        );
    };
 
}
 
export default Particle;