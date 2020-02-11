import React from 'react';
import { Provider } from 'react-redux';

import ReduxForm from './ReduxForm';
import configureStore from './ReduxStore';

const store = configureStore();

function ReduxPage() {
  return (
    <Provider store={store}>
      <ReduxForm />
    </Provider>
  );
}

export default ReduxPage;
