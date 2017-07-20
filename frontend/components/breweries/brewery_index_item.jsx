import React from 'react';
import { Link } from 'react-router-dom';

class BreweryIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li><h4>{this.props.name}</h4></li>
        <li><h4>{this.props.city}</h4></li>
        <li><h4>{this.props.state}</h4></li>
        <li><h4>{this.props.country}</h4></li>
      </ul>
    );
  }
}

export default BreweryIndexItem;
