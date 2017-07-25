import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_SEARCH
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
  searchVal: "",
  selectedBeerId: null,
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case RECEIVE_SEARCH:
      const searchVal = action.searchVal;
      return merge({}, state, {searchVal});
    default:
      return state;
  }
};

export default SessionReducer;
