import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_SELECTED_BEER_ID = 'RECEIVE_SELECTED_BEER_ID';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSearchVal = searchVal => ({
  type: RECEIVE_SEARCH,
  searchVal
});

export const receiveSelectedBeerId = selectedBeerId => ({
  type: RECEIVE_SELECTED_BEER_ID,
  selectedBeerId
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
