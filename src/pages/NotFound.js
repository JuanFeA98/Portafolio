import React, { Component } from 'react';

import '../styles/pages/NotFound.css';
import '../styles/pages/Home.css';

import Particles from '../components/Particles';
import Error404 from '../components/Error404';

class NotFound extends Component{
    render(){
        return(
            <div className="Home">
                <Particles/>
                <Error404/>
            </div>
        )
    }
}

export default NotFound