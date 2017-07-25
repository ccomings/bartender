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
    const { items } = this.props;
    return (
      <section>
        <h1>All of the Search Items</h1>

        <ul>{items.length > 0 ? items.map(item =>
          <SearchIndexItem key={item.id} id={item.id} item={item}/>) : ""}
        </ul>
      </section>
    );
  }
}

export default withRouter(SearchIndex);
