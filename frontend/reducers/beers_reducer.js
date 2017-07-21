import { merge } from 'lodash';

import { RECEIVE_ALL_BEERS, RECEIVE_ONE_BEER,
  EDIT_BEER, REMOVE_BEER } from '../actions/beers_actions';

const BeersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_ONE_BEER:
      const newBeer = {[acton.beer.id]: action.beer};
      return merge({}, state, newBeer);
    case EDIT_BEER:
      const patched_beer = {[action.beer.id]: action.beer};
      return merge({}, state, patched_beer);
    case REMOVE_BEER:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default BeersReducer;
