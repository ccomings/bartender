import React from 'react';
import {
  Route, Redirrect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Beertendr</h1>
      <NavbarContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
