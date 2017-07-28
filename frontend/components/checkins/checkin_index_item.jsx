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

        <div key={this.props.checkin.id} className="checkin-item-parent">
          <div className='checkin-item'>
            <div className='checkin-item-rs'>
              <div className="paX2">
                <img src={image()} className="list-images"/>
              </div>
              <h4 className="paX2">
                {this.props.checkin.user.username} is drinking a
                <br/>
                <span className='nowrap'>
                  <Link className='chkn-beer' to={`/beers/${this.props.checkin.beer.id}`}>
                    {this.props.checkin.beer.name}
                  </Link>
                </span>
                <br/>
                at {this.props.checkin.location}
              </h4>
            </div>
            <div className='checkin-item-ls'>
              <div className='chkn-itm-ls-labels'>
                <h4 className="index-ul-details-left-text">Review</h4>
                <h4 className="index-ul-details-left-text">Rating</h4>
              </div>
              <div className='chkn-itm-rs-labels'>
                <h4 className="index-ul-details-right-text">{this.props.checkin.review}</h4>
                <h4 className="index-ul-details-right-text">{this.props.checkin.rating}</h4>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(CheckinIndexItem);
