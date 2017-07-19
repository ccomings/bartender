import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <h1>Beertendr</h1>
    <Link to='/login'>Login</Link>
    &nbsp;or&nbsp;
    <Link to='/signup'>Sign up!</Link>
  </nav>
);

const navBar = (currentUser, logout, history) => (
  <nav className="navbar_container">
    <div className="navbar-items">
      <button className='square-buttons' onClick={() => {
          history.push('/beers');
        }}>Beers</button>
      <button className='square-buttons' onClick={() => {
          history.push('/breweries');
        }}>Breweries</button>
      <button className='square-buttons' onClick={() => {
          history.push('/checkin');
        }}>Checkin</button>
    </div>
    <div className="navbar-items">
      <h1 className="logo">Beertendr</h1>
    </div>
    <div className="navbar-items" className="navbar-right-side">
      <h3 className="greeting">Hi, {currentUser.username}!</h3>
      <button className='circle-buttons' onClick={() => {
          history.push('/profile');
        }}>Profile</button>
      <button className='circle-buttons'onClick={logout}>Log Out</button>
    </div>
  </nav>
);

const Navbar = ({ currentUser, logout, history }) => (
  currentUser ? navBar(currentUser, logout, history) : sessionLinks()
);

export default Navbar;
