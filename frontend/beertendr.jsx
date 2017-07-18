import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

//TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // window.signup = signup;
  // window.signup = signup;

//TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});