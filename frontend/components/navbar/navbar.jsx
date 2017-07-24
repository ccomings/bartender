import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login'><h2>Login</h2></Link>
    <img className="logo" src="http://res.cloudinary.com/dkeart1zy/image/upload/v1500518586/Screen_Shot_2017-07-19_at_7.41.37_PM_s94bef.png"/>
    <Link to='/signup'><h2>Sign up</h2></Link>
  </nav>
);

const navBar = (currentUser, logout, history) => (
  <nav className="navbar_container">
    <div className="navbar-items navbar-left-side">
      <Link to="/">
        <img className="logo" src="http://res.cloudinary.com/dkeart1zy/image/upload/v1500518586/Screen_Shot_2017-07-19_at_7.41.37_PM_s94bef.png"/>
      </Link>
    </div>
    <div className="navbar-items navbar-middle-side">
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
    <div className="navbar-items navbar-right-side">
      <h3 className="greeting">Prost, {currentUser.username}!</h3>
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

export default withRouter(Navbar);
