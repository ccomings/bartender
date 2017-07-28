import React, { Component } from 'react';
import { withRouter, Rout, Link } from 'react-router-dom';

class BeerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneBeer(this.props.match.params.beerId);
  }

  render() {
    const selectedBeer = this.props.beer;

    const image = () => {
      if (!selectedBeer.image_url ) {
        return "http://res.cloudinary.com/dkeart1zy/image/upload/c_scale,w_200/v1501190263/FMBW_Beers_Phuket-Lager-300x300_vd3csi.png";
      } else {
        return selectedBeer.image_url;
      }
    };

    if (selectedBeer === undefined) {
      return <h1>""</h1>;
    } else {
      return(
        <div className='show-page-section-parent'>
          <section className="show-page-section">
            <div className='beer-show'>
              <div className='maX2'>
                <img src={image()} className="show-page-images"/>
              </div>
              <div className='maX2'>
                <h1>{selectedBeer.name}</h1>
                <h3>{selectedBeer.description}</h3>
                <h3>{selectedBeer.abv}</h3>
                <h3>{selectedBeer.ibu}</h3>
                <h3 className="maY2"><Link className="beer-brewery" to={`/breweries/${selectedBeer.brewery.id}`}>{selectedBeer.brewery.name}</Link></h3>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default withRouter(BeerShow);
