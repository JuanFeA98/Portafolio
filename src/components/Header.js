import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/components/Header.css';
import Menu from '../assets/icons/BurgerMenu.svg'

import ShowMenu from '../utils/Menu.js'

class Header extends Component{

    render(){
        return(
            <div className="Header">
                <div className="Header__Logo">
                    <Link to="/">
                        <div></div>
                    </Link>
                    <Link to="/">
                        <h1>Juan F Martínez B </h1>
                    </Link>
                </div>
                <div className="Header__NavBar" id="NavBar">
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="Header__Menu" onClick={ShowMenu}>
                    <img src={Menu} alt=""/>
                </div>
            </div>
        )
    }
}

export default Header;