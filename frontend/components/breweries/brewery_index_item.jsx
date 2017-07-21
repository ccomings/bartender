import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BreweryIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/breweries/${this.props.id}`}>
          <img src={this.props.brewery.image_url}/>
          <ul>
            <li><h4>{this.props.brewery.name}</h4></li>
            <li><h4>{this.props.brewery.city}</h4></li>
            <li><h4>{this.props.brewery.state}</h4></li>
            <li><h4>{this.props.brewery.country}</h4></li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(BreweryIndexItem);
