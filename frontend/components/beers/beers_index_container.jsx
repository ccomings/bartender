import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectAllBeers } from '../../reducers/selectors';
import { requestAllBeers } from '../../actions/beers_actions';
import BeersIndex from './beers_index';

const mapStateToProps = state => ({
  beers: selectAllBeers(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllBeers: () => dispatch(requestAllBeers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersIndex);
