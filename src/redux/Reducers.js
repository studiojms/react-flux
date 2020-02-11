import { combineReducers } from 'redux';

import ItemReducer from './ItemReducer';

// glue all the reducers together
export default combineReducers({
  ...ItemReducer,
});
