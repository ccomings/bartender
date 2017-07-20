import { merge } from 'lodash';

import {
  RECEIVE_ALL_BREWERIES,
  RECEIVE_ONE_BREWERY
  } from '../actions/breweries_actions';

const BreweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries;
    case RECEIVE_ONE_BREWERY:
      const newBrewery = {[action.brewery.id]: action.brewery};
      return merge({}, state, newBrewery);
    default:
      return state;
  }
};

export default BreweriesReducer;
