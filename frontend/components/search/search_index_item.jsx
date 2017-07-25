import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
