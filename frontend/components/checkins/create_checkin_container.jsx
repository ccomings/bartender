import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveSearchVal } from '../../actions/session_actions';
import { createCheckin } from '../../actions/checkin_actions';
import CreateCheckin from './create_checkin';

const mapStateToProps = ({ session, errors }) => ({
  errors,
  currentUserId: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  receiveSearchVal: searchVal => dispatch(receiveSearchVal(searchVal)),
  createCheckin: checkin => dispatch(createCheckin(checkin))

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCheckin));
