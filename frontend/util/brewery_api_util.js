export const fetchAllBreweries = () => (
  $.ajax({
    method: 'GET',
    url: '/api/breweries',
  })
);

export const fetchOneBrewery = id => (
  $.ajax({
    method: 'GET',
    url: `/api/breweries/${id}`,
  })
);
