import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveSelectedBeerId(this.props.item.id);
  }

  render() {
    console.log("selected", this.props.selectedBeerId);
    console.log("id", this.props.id);
    console.log("all", this.props);
    return (
      <div className='search-index-item' onClick={this.handleClick} id={this.props.selectedBeerId === this.props.id ? 'highlighted-item' : ''} >
        {this.props.item.name}
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
