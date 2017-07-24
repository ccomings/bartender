import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { selectOneBeer } from '../../reducers/selectors';
import { requestOneBeer } from '../../actions/beers_actions';
import BeerShow from './beer_show';

const mapStateToProps = (state, { match }) => {
  const beerId = parseInt(match.params.beerId);
  const beer = selectOneBeer(state, match.params.beerId);
  return {beerId, beer};
};

const mapDispatchToProps = dispatch => ({
  requestOneBeer: id => dispatch(requestOneBeer(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow));
