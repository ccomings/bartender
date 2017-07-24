import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>Checkin 1</h1>
      </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
