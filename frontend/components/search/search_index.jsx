import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';


class SearchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <section>
        <h3>Click a Beer</h3>

        <ul>{items.length > 0 ? items.map(item =>
          <SearchIndexItem receiveSelectedBeerId={this.props.receiveSelectedBeerId} selectedBeerId={this.props.selectedBeerId} key={item.id} id={item.id} item={item}/>) : ""}
        </ul>
      </section>
    );
  }
}

export default withRouter(SearchIndex);
