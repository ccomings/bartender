import React from 'react';
import { Link } from 'react-router-dom';

class BreweryIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li><h4>{this.props.brewery.name}</h4></li>
        <li><h4>{this.props.brewery.city}</h4></li>
        <li><h4>{this.props.brewery.state}</h4></li>
        <li><h4>{this.props.brewery.country}</h4></li>
      </ul>
    );
  }
}

export default BreweryIndexItem;
