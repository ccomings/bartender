import React, { Component } from 'react';
import { withRouter, Rout, Link } from 'react-router-dom';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneBeer(this.props.match.params.beerId);
  }

  render() {
    const selectedBeer = this.props.beer;

    if (selectedBeer === undefined) {
      return <h1>""</h1>;
    } else {
      return(
        <div className='show-page-section-parent'>
          <section className="show-page-section">
            <img src={selectedBeer.image_url} className="show-page-images"/>
            <h1>{selectedBeer.name}</h1>
            <h3>{selectedBeer.description}</h3>
            <h3>{selectedBeer.abv}</h3>
            <h3>{selectedBeer.ibu}</h3>
            <h3><Link to={`/breweries/${selectedBeer.brewery.id}`}>{selectedBeer.brewery.name}</Link></h3>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(BeerShow);
