import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BeerIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const image = () => {
      if (!this.props.beer.image_url ) {
        return "http://res.cloudinary.com/dkeart1zy/image/upload/c_scale,w_200/v1501190263/FMBW_Beers_Phuket-Lager-300x300_vd3csi.png";
      } else {
        return this.props.beer.image_url;
      }
    };
    return (
      <div>
        <Link to={`/beers/${this.props.id}`}>
          <ul className="index-list-ul">
            <li className="index-list-li">
              <img src={image()} className="list-images"/>
            </li>
            <li  className="index-list-li">
              <h3 className="list-title">{this.props.beer.name}</h3>
              <ul className="index-ul-details">
                <li className="index-ul-details-left">
                  <h4 className="index-ul-details-left-text">Brewery</h4>
                  <h4 className="index-ul-details-left-text">ABV</h4>
                  <h4 className="index-ul-details-left-text">IBU</h4>
                </li>
                <li className="index-ul-details-right">
                  <h4 className="index-ul-details-right-text">{this.props.beer.brewery.name}</h4>
                  <h4 className="index-ul-details-right-text">{this.props.beer.abv}</h4>
                  <h4 className="index-ul-details-right-text">{this.props.beer.ibu}</h4>
                </li>
              </ul>
            </li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(BeerIndexItem);
