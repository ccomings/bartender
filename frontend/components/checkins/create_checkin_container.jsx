import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createCheckin } from '../../actions/checkin_actions';
import CreateCheckin from './create_checkin';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createCheckin: checkin => dispatch(createCheckin(checkin))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCheckin));
