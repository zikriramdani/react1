import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Squeze from './pages/Squeze';
 
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/landingpage" exact component={LandingPage} />
                    <Route path="/squeze" exact component={Squeze} />
                    <Route component={LandingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Routes;