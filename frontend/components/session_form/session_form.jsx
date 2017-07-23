import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({username: "guest", password:"password"}, () => {
      const user = Object.assign({}, this.state);
      this.props.processDemo(user);
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" className="navlink-signup">Sign up</Link>;
    } else {
      return <Link to="/login" className="navlink-signup">Login</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <h2>Welcome to Beertendr!</h2>
          <h3 className="navlink-parent">Please {this.props.formType} or {this.navLink()}</h3>
          {this.renderErrors()}
          <div className='session-login-form'>
            <label className='login-input-container'>
              <i className="fa fa-user fa-lg" aria-hidden="true"></i>
              <input
                placeholder=" Username"
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                className='login-input'
              />
            </label>
            <label className='login-input-container'>
              <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
              <input placeholder=" Password"
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
                />
            </label>
            <input type='submit' value='Submit' className="login-input-submit"/>
          </div>
        </form>
        <form onSubmit={this.handleDemo} className='demo-login'>
          <input type='submit' value='Demo Login'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
