export const fetchAllBeers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/beers',
  })
);

export const fetchOneBeer = id => (
  $.ajax({
    method: 'GET',
    url: `/api/beers/${id}`,
  })
);

export const createBeer = beer => (
  $.ajax({
    method: 'POST',
    url: '/api/beers',
    data: { beer }
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
