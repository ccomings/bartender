import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchBeers();
  //   this.props.fetchBreweries();
  // }

  render() {
    const { currentUser, logout, history } = this.props;
    if (currentUser) {
      return (
        <nav className="navbar_container">
          <nav className="navbar">
            <div className="navbar-items navbar-left-side">
              <Link to="/">
                <img className="logo" src="http://res.cloudinary.com/dkeart1zy/image/upload/v1500518586/Screen_Shot_2017-07-19_at_7.41.37_PM_s94bef.png"/>
              </Link>
              <button className='square-buttons-small' onClick={() => {
                  history.push('/beers');
                }}><h4 className="fancy-font">Beers</h4></button>
              <button className='square-buttons-small' onClick={() => {
                  history.push('/breweries');
                }}><h4>Breweries</h4></button>
            </div>
            <div className="navbar-items navbar-right-side">
              <h3 className="greeting">Prost, {currentUser.username}!</h3>
              <button className="checkin-btn" onClick={() => {
                  history.push('/checkin');
                }}>
                <i className="fa fa-check fa-3x" aria-hidden="true"></i>
                <h2>Checkin</h2></button>
              <button className="btn-round" onClick={() => {
                  history.push('/profile');
                }}>
                <i className="fa fa-user fa-3x" aria-hidden="true"></i>
              </button>
              <button className="btn-round" onClick={logout}>
                <i className="fa fa-sign-out fa-3x" aria-hidden="true"></i>
              </button>

            </div>
          </nav>
        </nav>
      );
    } else {
      return(
        <nav className="navbar_container">
          <nav className="login-signup">
            <Link to='/login' className="square-buttons">
              <h2>Login</h2>
            </Link>
            <img className="logo" src="http://res.cloudinary.com/dkeart1zy/image/upload/v1500518586/Screen_Shot_2017-07-19_at_7.41.37_PM_s94bef.png"/>
            <Link to='/signup' className="square-buttons"><h2>Sign up</h2></Link>
          </nav>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
