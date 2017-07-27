import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import BreweryIndexItem from './brewery_index_item';

class BreweriesIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllBreweries();
  }

  render() {
    const { breweries } = this.props;
    return (
      <section className='index-section'>
        <div className='page-header-container'>
          <h1 className="page-header">Breweries</h1>
        </div>
        <ul className="index-list">{breweries.map(brewery =>
          <BreweryIndexItem
            key={brewery.id}
            id={brewery.id}
            brewery={brewery}/>)}
        </ul>
      </section>
    );
  }
}

export default withRouter(BreweriesIndex);
