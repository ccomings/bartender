import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CreateBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      brewery_id: this.props.match.params.breweryId,
      abv: '',
      ibu: '',
      image_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBeer(this.state);

  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value});
  }

  render(){
    return (
      <div className='beer-form-container'>
        <div className='beer-form-box'>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li className='login-form-list-items'>
                <h3>Add a Beer!</h3>
              </li>
              <li className='login-form-list-items'>
                <label className='login-input-container'>
                  <input placeholder="name" className='login-input' ref="name" type="text" value={this.state.name} onChange={this.update('name')}/>
                </label>

              </li>
              <li className='login-form-list-items'>
                <label className='login-input-container'>
                  <input placeholder="description" className='login-input' ref="description" type="text" value={this.state.description} onChange={this.update('description')}/>
                </label>

              </li>
              <li className='login-form-list-items'>
                <label className='login-input-container'>
                  <input placeholder="ABV" className='login-input' ref="abv" type="text" value={this.state.abv} onChange={this.update('abv')}/>
                </label>

              </li>
              <li className='login-form-list-items'>
                <label className='login-input-container'>
                  <input placeholder="IBU" className='login-input' ref="ibu" type="text" value={this.state.ibu} onChange={this.update('ibu')}/>
                </label>

              </li>
              <li className='login-form-list-items'>
                <label className='login-input-container'>
                  <input placeholder="Image Url" className='login-input' ref="image_url" type="text" value={this.state.image_url} onChange={this.update('image_url')}/>
                </label>

              </li>
              <li className='login-form-list-items'>
                <input type='submit' value='Submit' className="login-input-submit"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );

  }
}

export default withRouter(CreateBeer);
