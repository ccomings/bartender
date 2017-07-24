import { merge } from 'lodash';

import { RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';

const CheckinsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins;
    default:
      return state;
  }
};

export default CheckinsReducer;
