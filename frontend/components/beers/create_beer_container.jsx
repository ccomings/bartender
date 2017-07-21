import { connect } from 'react-redux';

import { createBeer } from '../../actions/beer_actions';
import CreateBeer from './create_beer';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createBeer: beer => dispatch(createBeer(beer))
});

export default connect(
  mapStateToProps,
  mapStateToProps
)(CreateBeer);
