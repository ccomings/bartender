import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectSearchBeers } from '../../reducers/selectors';
import { receiveSearchVal } from '../../actions/session_actions';
import SearchIndex from './search_index';

const mapStateToProps = state => ({
  searchVal: selectSearchBeers(state)
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex));
