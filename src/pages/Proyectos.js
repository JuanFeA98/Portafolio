import React, { Component } from 'react';

import '../styles/pages/Home.css'

import Categorias from '../components/Categorias'

class Proyectos extends Component{
    render(){
        return(
            <div className="Home">
                <Categorias/>
            </div>
        )
    }
}

export default Proyectos