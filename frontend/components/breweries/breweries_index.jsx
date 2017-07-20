import React from 'react';
import { Link } from 'react-router-dom';

class BreweriesIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllBreweries();
  }

  render() {
    const { breweries } = this.props;
    return (
      <h1>All of the Breweries</h1>

    );
  }
}

export default BreweriesIndex;
