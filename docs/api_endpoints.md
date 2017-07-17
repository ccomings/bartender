# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `GET /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Checkins
- `GET /api/checkins`
- `GET /api/beer/:id/checkins`
- `GET /api/user/:id/checkins`
- `GET /api/breweries/:id/checkins`
- `POST /api/beer/:id/checkins`
- `DELETE /api/checkins/:id`

### Beers
- `GET /api/beers`
- `GET /api/beers/:id`
- `GET /api/breweries/:id/beers`  
- `POST /api/beers`
- `PATCH /api/beers/:id`

### Breweries
- `GET /api/breweries`
- `GET /api/breweries/:id`
- `POST /api/breweries`
- `PATCH /api/breweries/:id`
