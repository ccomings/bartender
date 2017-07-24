export const fetchAllCheckins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/checkins',
  })
);

export const fetchOneCheckin = id => (
  $.ajax({
    method: 'GET',
    url: `/api/checkins/${id}`,
  })
);

export const createCheckin = checkin => (
  $.ajax({
    method: 'POST',
    url: '/api/checkins',
    data: { checkin }
  })
);
