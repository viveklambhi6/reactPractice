import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Just from './Just';
import About from './About';
import Modal from './Modal';


const Main = () => (
    // <Main>
    <div>
        <Switch>
            <Route exact path = '/my-action' component={Just} />
            <Route exact path = '/PR-approval' component={About} />
            <Route exact path = '/create-pr' component={Modal} />
        </Switch>
        </div>

)

export default Main ;