import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import '../styles/components/Categorias.css'

import Frontend from '../assets/icons/frontend.svg'
import Backend from '../assets/icons/database.svg'
import FullStack from '../assets/icons/web.svg'
import Science from '../assets/icons/science.svg'


class Categorias extends Component{
    render(){
        return(
            <div className="Categorias">
                <h2>PROYECTOS</h2>
                <div className="CategoryType">
                    <Link to="/proyectos/frontend" className="FrontendLink">
                        <div className="Category Frontend">
                            <img src={Frontend} alt=""/>
                            <p>Frontend</p>
                        </div>
                    </Link>
                    <Link to="/proyectos/backend" className="BackendLink">
                        <div className="Category Backend">
                            <img src={Backend} alt=""/>
                            <p>Backend</p>
                        </div>
                    </Link>
                    <Link to="/proyectos/fullstack" className="FullStackLink">
                        <div  className="Category FullStack">
                            <img src={FullStack} alt=""/>
                            <p>FullStack</p>
                        </div>
                    </Link>
                    <Link to="/proyectos/ds" className="DSLink">
                        <div to="/proyectos/ds" className="Category DataScience" >
                            <img src={Science} alt=""/>
                            <p>Data Science</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Categorias