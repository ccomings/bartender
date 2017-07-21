import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_ONE_BEER = "RECEIVE_ONE_BEER";
export const EDIT_BEER = "EDIT_BEER";
export const REMOVE_BEER = "REMOVE_BEER";

export const requestAllBeers = () => dispatch => {
  return APIUtil.fetchAllBeers()
    .then(beers => dispatch(receiveAllBeers(beers)));
};

export const requestOneBeer = (id) => dispatch => {
  return APIUtil.fetchOneBeer(id)
    .then(beer => dispatch(receiveOneBeer(beer)));
};

export const createBeer = beer => dispatch => (
  APIUtil.create(beer).then(beer => (
    dispatch(receiveOneBeer(beer))
  ))
);

export const editBeer = beer => dispatch => (
  APIUtil.editBeer(beer).then(beer => (
    dispatch(receiveOneBeer(beer))
  ))
);

export const deleteBeer = id => dispatch => (
  APIUtil.deleteBeer(id).then(beer => (
    dispatch(removeBeer(beer))
  ))
);

export const receiveAllBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers
});

export const receiveOneBeer = beer => ({
  type: RECEIVE_ONE_BEER,
  beer
});

export const removeBeer = id => ({
  type: REMOVE_BEER,
  id
});
