import React from 'react';
import {
  Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Placeholder from './placeholder';
import BreweriesIndexContainer from './breweries/breweries_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <div className="app-page-container">
      <Switch>
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <ProtectedRoute path="/breweries/:breweryId" component={BreweryShowContainer} />
        <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} />
        <ProtectedRoute path="/" component={Placeholder} />
      </Switch>
    </div>
  </div>
);

export default App;
