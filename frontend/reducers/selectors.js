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

// export const selectBreweryBeers = ( { beers }, brewery_id ) => {
//   let breweryBeers = [];
//   if (Object.keys(beers)) {
//     Object.keys(beers).forEach(brewery_id => {
//       if (beers[brewery_id] === brewery_id) {
//         breweryBeers.push(beer[id]);
//       }
//     });
//   }
// };

export const selectAllCheckins = ({ checkins }) => values(checkins);

export const selectSearchBeers = ({ beers }, searchVal ) => {

  let searchArray = [];
  if (Object.keys(beers)) {
    Object.keys(beers).forEach(id => {
      if (beers[id].name.toLowerCase().includes(searchVal.toLowerCase())) {
        searchArray.push(beers[id]);
      };
    });
    return searchArray;
  }
};
