import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'>Login</Link>
    &nbsp;or&nbsp;
    <Link to='/signup'>Sign up!</Link>
  </nav>
);

const navBar = (currentUser, logout) => (
  <nav className="navbar_container">
    <h2>Hi, {currentUser.username}!</h2>
    <button className='circle-buttons'onClick={logout}>Log Out</button>
  </nav>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? navBar(currentUser, logout) : sessionLinks()
);

export default Navbar;
// <!--
// <button className='square-buttons' onClick={}>Beers</button>
// <button className='square-buttons' onClick={}>Breweries</button>
// -->    <!--
//     <button className='circle-buttons' onClick={}>CheckIn</button>
//     <button className='circle-buttons' onClick={}>Profile</button>
//     -->
