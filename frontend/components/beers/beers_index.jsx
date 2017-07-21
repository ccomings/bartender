import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeersIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllBeers();
  }

  render() {
    const { beers } = this.props;
    return (
      <section>
        <h1>All of the Beers</h1>
        <ul>{beers.map(beer =>
          <BeerIndexItem key={beer.id} id={beer.id} beer={beer}/>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(BeersIndex);
