import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import Layout from './components/layout';
import NotFoundPage from './pages/not-found';

import Home from './pages/home'

const routes = (
  <Route handler={Layout}>
    <Route name="home" handler={Home} path="/" addHandlerKey={true} />
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

export default routes;
