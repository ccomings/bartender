import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="index-list-item">
          <li><img src={this.props.checkin.user.image_url} className="list-images"/></li>
          <li>{this.props.checkin.user.username}</li>
          <li>{this.props.checkin.beer.name}</li>
          <li>{this.props.checkin.location}</li>
          <li>{this.props.checkin.rating}</li>
          <li>{this.props.checkin.review}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
