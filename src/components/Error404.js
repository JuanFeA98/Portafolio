import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import '../styles/components/Error404.css'

class Error404 extends Component{
    render(){
        return(
            <div className="Error404">
                <p>404</p>
                <p>Not Found</p>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }
} 

export default Error404;