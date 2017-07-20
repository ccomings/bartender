import React from 'react';
import {
  Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Placeholder from './placeholder';
import BreweriesIndexContainer from './breweries/breweries_index_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="app-page-container">
      <Switch>
        <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} />
        <ProtectedRoute path="/" component={Placeholder} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
