import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createBeer } from '../../actions/beers_actions';
import CreateBeer from './create_beer';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createBeer: beer => dispatch(createBeer(beer))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBeer));
