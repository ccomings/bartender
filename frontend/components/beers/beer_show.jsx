import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

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
        <section>
          <h1>{selectedBeer.name}</h1>
          <h3>{selectedBeer.description}</h3>
          <h3>{selectedBeer.abv}</h3>
          <h3>{selectedBeer.ibu}</h3>
        </section>
      );
    }
  }
}

export default withRouter(BeerShow);
