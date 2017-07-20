export const fetchBreweries = () => (
  $.ajax({
    method: 'GET',
    url: '/api/breweries',
  })
);

export const fetchBrewery = id => (
  $.ajax({
    method: 'GET',
    url: `/api/breweries/${id}`,
  })
);
