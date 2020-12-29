import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/components/Projects.css'
import World from '../assets/icons/world.svg';
import Atenea from '../assets/icons/partenon.svg';
import Computer from '../assets/icons/computer.svg';
import Clon from '../assets/icons/stormtrooper.svg';

class Projects extends Component{
    render(){
        return(
            <div className="Proyectos">
                <div className="Project__Card">
                    <div className="Project__Card--icon Project01" >
                        <Link to="/world">
                            <img className="Project__Card--img" src={World} alt="Logo de Atenea"/>    
                        </Link>
                    </div>
                    <div className="Project__Card--name">Titulo 1</div>
                </div>
                <div className="Project__Card">
                    <div className="Project__Card--icon Project02" >
                        <Link to="/atenea">
                            <img className="Project__Card--img" src={Atenea} alt="Logo de Atenea"/>    
                        </Link>
                    </div>
                    <div className="Project__Card--name">Atenea</div>
                </div>
                <div className="Project__Card">
                    <div className="Project__Card--icon Project03" >
                        <Link to="/Proyectos">
                            <img className="Project__Card--img" src={Computer} alt="Logo de Atenea"/>    
                        </Link>
                    </div>
                    <div className="Project__Card--name">Otros proyectos</div>
                </div>
                <div className="Project__Card">
                    <div className="Project__Card--icon Project04" >
                        <Link to="/clones">
                            <img className="Project__Card--img" src={Clon} alt="Logo de Atenea"/>    
                        </Link>
                    </div>
                    <div className="Project__Card--name">Clones</div>
                </div>
            </div>
        )
    }
}

export default Projects