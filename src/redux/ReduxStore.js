import { createStore, applyMiddleware } from 'redux';

import Reducers from './Reducers';

let middleware = [];

const baseStore = createStore(Reducers, applyMiddleware(...middleware));
const configureStore = initialState => {
  return baseStore;
};

export default configureStore;
