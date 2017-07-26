import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this is an item', this.props);
    return (
      <div>
        <ul className="index-list-item">
          <li>{this.props.checkin.beer_id}</li>
          <li>{this.props.checkin.brewery_id}</li>
          <li>{this.props.checkin.rating}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
