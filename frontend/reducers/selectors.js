import { values } from 'lodash';

export const selectAllBreweries = ({ breweries }) => values(breweries);

export const selectOneBrewery = ( {breweries}, id ) => {
  const brewery = breweries[id];
  return brewery;
};
