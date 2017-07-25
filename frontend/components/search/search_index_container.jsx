import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectSearchBeers } from '../../reducers/selectors';
import { receiveSearchVal, receiveSelectedBeerId } from '../../actions/session_actions';
import SearchIndex from './search_index';

const mapStateToProps = state => ({
  items: selectSearchBeers(state, state.session.searchVal, state.session.selectedBeerId)
});

const mapDispatchToProps = dispatch => ({
  receiveSelectedBeerId: id => dispatch(receiveSelectedBeerId(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex));
