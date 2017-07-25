import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
