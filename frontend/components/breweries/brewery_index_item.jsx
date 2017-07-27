import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BreweryIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/breweries/${this.props.id}`} >
          <ul className="index-list-ul">
            <li className="index-list-li">
              <img src={this.props.brewery.image_url} className="list-images"/>
            </li>
            <li className="index-list-li">
              <div>
                <h3 className="list-title">{this.props.brewery.name}</h3>
                <ul className="index-ul-details">
                  <li className="index-ul-details-left">
                    <h4 className="index-ul-details-left-text">City</h4>
                    <h4 className="index-ul-details-left-text">State</h4>
                    <h4 className="index-ul-details-left-text">Country</h4>
                  </li>
                  <li className="index-ul-details-right">
                    <h4 className="index-ul-details-right-text">{this.props.brewery.city}</h4>
                    <h4 className="index-ul-details-right-text">{this.props.brewery.state}</h4>
                    <h4 className="index-ul-details-right-text">{this.props.brewery.country}</h4>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(BreweryIndexItem);
