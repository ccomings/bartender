import * as APIUtil from '../util/brewery_api_util';

export const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
export const RECEIVE_ONE_BREWERY = "RECEIVE_ONE_BREWERY";

export const requestAllBreweries = () => dispatch => {
  return APIUtil.fetchAllBreweries()
  .then(breweries => dispatch(receiveAllBreweries(breweries)));
};

export const requestOneBrewery = (id) => dispatch => {
  return APIUtil.fetchOneBrewery(id)
  .then(brewery => dispatch(receiveOneBrewery(brewery)));
};

export const receiveAllBreweries = breweries => ({
  type: RECEIVE_ALL_BREWERIES,
  breweries
});

export const receiveOneBrewery = brewery => ({
  type: RECEIVE_ONE_BREWERY,
  brewery
});
