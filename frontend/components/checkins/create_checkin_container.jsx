import { connect } from 'react-redux';
import { selectAllBeers } from '../../reducers/selectors';
import { withRouter } from 'react-router';
import { receiveSearchVal } from '../../actions/session_actions';
import { createCheckin } from '../../actions/checkin_actions';
import CreateCheckin from './create_checkin';
import { requestSearchBeers } from '../../actions/beers_actions';

const mapStateToProps = ({ session, errors, beers }) => ({
  errors,
  currentUserId: session.currentUser.id,
  // beers: selectAllBeers({ beers }),
  selectedBeerId: session.selectedBeerId,
  beers
});

const mapDispatchToProps = dispatch => ({
  receiveSearchVal: searchVal => dispatch(receiveSearchVal(searchVal)),
  createCheckin: checkin => dispatch(createCheckin(checkin)),
  requestSearchBeers: name => dispatch(requestSearchBeers(name)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCheckin));
