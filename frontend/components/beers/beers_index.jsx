import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeersIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllBreweries();
  }

  render() {
    const { beers } = this.props;
    return (
      <section>
        <h1>All of the Breweries</h1>
        <ul>
          {beers.map(beers =>
          <BeerIndexItem
            key={beer.id}
            id={beer.id}
            beers={beer}/>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(BeersIndex);
