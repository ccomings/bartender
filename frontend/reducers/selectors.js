import { values } from 'lodash';

export const selectAllBreweries = ({ breweries }) => values(breweries);

export const selectOneBrewery = ( {breweries}, id ) => {
  const brewery = breweries[id];
  return brewery;
};

export const selectAllBeers = ({ beers }) => values(beers);

export const selectOneBeer = ( { beers }, id ) => {
  const beer = beers[id];
  return beer;
};
