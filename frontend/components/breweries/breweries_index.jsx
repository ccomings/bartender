import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreweryIndexItem from './brewery_index_item';

class BreweriesIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllBreweries();
  }

  render() {
    const { breweries } = this.props;
    return (
      <section>
        <h1>All of the Breweries</h1>
        <ul>
          {breweries.map(brewery =>
          <BreweryIndexItem
            key={brewery.id}
            id={brewery.id}
            brewery={brewery}/>)}
        </ul>
      </section>
    );
  }
}

export default BreweriesIndex;
