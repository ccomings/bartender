import * as APIUtil from '../util/checkin_api_util';

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";

export const requestAllCheckins = () => dispatch => {
  return APIUtil.fetchAllCheckins()
    .then(checkins => dispatch(receiveAllCheckins(checkins)));
};

export const createCheckin = checkin => dispatch => (
  APIUtil.createCheckin(checkin).then(checkins => (
    dispatch(receiveAllCheckins(checkins))
  ))
);

export const receiveAllCheckins = checkins => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});
