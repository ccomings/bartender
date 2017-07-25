import React from 'react';
import {
  Route, Redirect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BreweriesIndexContainer from './breweries/breweries_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import BeersIndexContainer from './beers/beers_index_container';
import BeerShowContainer from './beers/beer_show_container';
import CheckinsIndexContainer from './checkins/checkins_index_container';
import CreateCheckinContainer from './checkins/create_checkin_container';


const App = () => (
  <div className="beertendr">
    <NavbarContainer />
    <div className="app-page-container">
      <div className="app-page-display">
        <Switch>
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <AuthRoute path="/login" component={SessionFormContainer} />
          <ProtectedRoute path="/breweries/:breweryId" component={BreweryShowContainer} />
          <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} />
          <ProtectedRoute path="/beers/:beerId" component={BeerShowContainer} />
          <ProtectedRoute path="/beers" component={BeersIndexContainer} />
          <ProtectedRoute path="/checkin" component={CreateCheckinContainer} />
          <ProtectedRoute path="/" component={CheckinsIndexContainer} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
