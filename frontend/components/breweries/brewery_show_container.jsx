import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectOneBrewery } from '../../reducers/selectors';
import { requestOneBrewery } from '../../actions/breweries_actions';
import BreweryShow from './brewery_show';

const mapStateToProps = (state, { match }) => {
  const breweryId = parseInt(match.params.breweryId);
  const brewery = selectOneBrewery(state, match.params.breweryId);
  return {breweryId, brewery};
};

const mapDispatchToProps = dispatch => ({
  requestOneBrewery: id => dispatch(requestOneBrewery(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweryShow));
