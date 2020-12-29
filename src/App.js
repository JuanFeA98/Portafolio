import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import NotFound from './pages/NotFound'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/proyectos" component={Proyectos}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App