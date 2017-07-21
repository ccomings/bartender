import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
      return(
        <section>
          <h1>{selectedBrewery.name}</h1>
          <h3>{selectedBrewery.city}</h3>
          <h3>{selectedBrewery.state}</h3>
          <h3>{selectedBrewery.country}</h3>
        </section>
      );
    }
  }
}
