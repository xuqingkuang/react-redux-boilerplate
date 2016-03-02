import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import { browserHistory } from 'react-router'

import Layout from './components/layout';
import NotFoundPage from './components/not-found';
import HomePage from './components/home'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default routes;