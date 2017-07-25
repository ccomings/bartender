import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveSearchVal();
  }

  render() {
    const { beers } = this.props;
    return (
      <section>
        <h1>All of the Search Items</h1>

        <ul>{beers.length > 0 ? beers.map(beer =>
          <SearchIndexItem key={beer.id} id={beer.id} beer={beer}/>) : ""}
        </ul>
      </section>
    );
  }
}

export default withRouter(SearchIndex);
