import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectAllBreweries } from '../../reducers/selectors';
import { requestAllBreweries } from '../../actions/breweries_actions';
import BreweriesIndex from './breweries_index';

const mapStateToProps = state => ({
  breweries: selectAllBreweries(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllBreweries: () => dispatch(requestAllBreweries())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweriesIndex));
