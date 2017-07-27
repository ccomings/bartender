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

        <ul key={this.props.checkin.id} className="index-list-ul">
          <li>
            <img src={image()} className="list-images"/>
          </li>
          <div>{this.props.checkin.user.username} is drinking a {this.props.checkin.beer.name} at {this.props.checkin.location}</div>
          <div>{this.props.checkin.review}</div>
          <div>{this.props.checkin.rating}</div>
        </ul>
    );
  }
}

export default withRouter(CheckinIndexItem);
