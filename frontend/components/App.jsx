import React from 'react';
import {
  Route, Redirrect, Switch, Link, HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Placeholder from './placeholder';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
      <ProtectedRoute path="/" component={Placeholder} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </header>
  </div>
);

export default App;
