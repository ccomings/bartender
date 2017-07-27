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
            <li className="index-list-li"><img src={this.props.brewery.image_url} className="list-images"/></li>
            <li className="index-list-li">
              <div>
                <h3>{this.props.brewery.name}</h3>
                <ul>
                  <li><h4>City | {this.props.brewery.city}</h4></li>
                  <li><h4>State | {this.props.brewery.state}</h4></li>
                  <li><h4>Country | {this.props.brewery.country}</h4></li>
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
