import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectAllCheckins } from '../../reducers/selectors';
import { requestAllCheckins } from '../../actions/checkin_actions';
import CheckinsIndex from './checkins_index';

const mapStateToProps = state => ({
  checkins: selectAllCheckins(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllCheckins: () => dispatch(requestAllCheckins())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinsIndex));
