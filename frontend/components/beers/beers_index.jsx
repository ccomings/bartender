import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBeers();
  }

  render() {
    const { beers } = this.props;
    return (
      <section className='index-section'>
        <div className='page-header-container'>
          <h1 className="page-header">Beers</h1>
        </div>

        <ul className="index-list">{beers.length > 0 ? beers.map(beer =>
          <BeerIndexItem key={beer.id} id={beer.id} beer={beer}/>) : ""}
        </ul>
      </section>
    );
  }
}

export default withRouter(BeersIndex);
