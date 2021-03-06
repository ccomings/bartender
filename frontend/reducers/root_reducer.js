import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BreweriesReducer from './breweries_reducer';
import BeersReducer from './beers_reducer';
import CheckinsReducer from './checkins_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  breweries: BreweriesReducer,
  beers: BeersReducer,
  checkins: CheckinsReducer,
});

export default rootReducer;
