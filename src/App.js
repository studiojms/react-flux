import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Template from './components/Template';
// import FluxPage from './flux-manual/FluxPage';
// import ReduxPage from './redux/ReduxPage';
// import MobxPage from './mobx/MobxPage';

const App = () => (
  <Router>
    <Template>
      <Switch>
        <Route path="/flux">{/* <FluxPage /> */}</Route>
        <Route path="/redux">{/* <ReduxPage /> */}</Route>
        <Route path="/mobx">{/* <MobxPage /> */}</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Template>
  </Router>
);

export default App;
