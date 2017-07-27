import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CheckinIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const image = () => {
      if (this.props.checkin.user.image_url === null) {
        return "http://res.cloudinary.com/dkeart1zy/image/upload/v1500605715/sample.jpg";
      } else {
        return this.props.checkin.user.image_url;
      }
    };
    return (
      <div>
        <ul className="index-list-ul">
          <li>
            <img src={image()} className="list-images"/>
          </li>
          <li>{this.props.checkin.user.username} is drinking a {this.props.checkin.beer.name} at {this.props.checkin.location}</li>
          <li>Review | {this.props.checkin.review}</li>
          <li>Rating | {this.props.checkin.rating}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
