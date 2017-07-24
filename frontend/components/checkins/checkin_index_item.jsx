import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <ul>
            <li>{this.props.checkin}</li>
          </ul>
      </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
