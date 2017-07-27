import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BeerIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const image = () => {
      if (!this.props.beer.image_url ) {
        return "http://fullmoonbrewwork.com/wp-content/uploads/2014/06/FMBW_Beers_Phuket-Lager-300x300.png";
      } else {
        return this.props.beer.image_url;
      }
    };
    return (
      <div>
        <Link to={`/beers/${this.props.id}`}>
          <ul className="index-list-ul">
            <li><img src={image()} className="list-images"/>
            </li>
            <li><h4>{this.props.beer.name}</h4></li>
            <li><h4>{this.props.beer.brewery.name}</h4></li>
            <li><h4>{this.props.beer.abv}</h4></li>
            <li><h4>{this.props.beer.ibu}</h4></li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(BeerIndexItem);
