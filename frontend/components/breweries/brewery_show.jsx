import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { BeerIndexItem } from '../beers/beer_index_item';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneBrewery(this.props.match.params.breweryId);
  }

  render() {
    const selectedBrewery = this.props.brewery;

    if (selectedBrewery === undefined) {
      return <h1>""</h1>;
    } else {
      const breweryBeers = selectedBrewery.beers.map(beer => (
        <li key={beer.id}><Link to={`/beers/${beer.id}`}>{beer.name}</Link></li>
        )
      );
      return(
        <section>
          <h1>{selectedBrewery.name}</h1>
          <h3>{selectedBrewery.city}</h3>
          <h3>{selectedBrewery.state}</h3>
          <h3>{selectedBrewery.country}</h3>
          <ul>{breweryBeers}</ul>
        </section>
      );
    }
  }
}

export default withRouter(BreweryShow);
