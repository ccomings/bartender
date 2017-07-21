export const fetchBeers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/beers',
  })
);

export const fetchBeer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/beers/${id}`,
  })
);

export const createBeer = data => (
  $.ajax({
    method: 'POST',
    url: '/api/beers',
    data
  })
);

export const editBeer = beer => (
  $.ajax({
    method: 'PATCH',
    url: `/api/beers/${beer.id}`,
    beer
  })
);

export const removeBeer = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/beers/${id}`
  })
);
