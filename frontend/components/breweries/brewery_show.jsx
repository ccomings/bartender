import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { BeerIndexItem } from '../beers/beer_index_item';
import CreateBeerContainer from '../beers/create_beer_container';

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
        <li className="search-index-item" key={beer.id}><Link to={`/beers/${beer.id}`}>{beer.name}</Link></li>
        )
      );
      return(
        <div className='show-page-section-parent'>
          <section className="show-page-section">
            <ul className='show-page-ul'>
              <li className='show-page-li'>
                <img src={selectedBrewery.image_url} className="show-page-images"/>
                <h3>Brewery | {selectedBrewery.name}</h3>
                <h3>City | {selectedBrewery.city}</h3>
                <h3>State | {selectedBrewery.state}</h3>
                <h3>Country | {selectedBrewery.country}</h3>
              </li>
              <li className='show-page-li'>
                <h3 className="paY">Beers</h3>
                <ul>{breweryBeers}</ul>
              </li>
              <li className='show-page-li'>
                <CreateBeerContainer />
              </li>
            </ul>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(BreweryShow);
