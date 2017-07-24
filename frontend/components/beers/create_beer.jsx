import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CreateBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      brewery_id: '',
      abv: '',
      ibu: '',
      image_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      brewery_id: this.props.match.params.breweryId,
      // styles: '',
    }, () => {
      this.props.createBeer(this.state);
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value});
  }

  render(){
    return (
      <div>

        <h3>Add a Beer!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input ref="name" type="text" value={this.state.name} onChange={this.update('name')}/>
          </label>
          <label>Description:
            <input ref="description" type="text" value={this.state.description} onChange={this.update('description')}/>
          </label>
          <label>ABV:
            <input ref="abv" type="text" value={this.state.abv} onChange={this.update('abv')}/>
          </label>
          <label>IBU:
            <input ref="ibu" type="text" value={this.state.ibu} onChange={this.update('ibu')}/>
          </label>
          <label>Image link:
            <input ref="image_url" type="text" value={this.state.image_url} onChange={this.update('image_url')}/>
          </label>

          <button>Submit</button>
        </form>
      </div>
    );

  }
}

export default withRouter(CreateBeer);
