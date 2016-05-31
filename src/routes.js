/* React */
import React from 'react';

/* React Router */
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

/* Router dependencies preparing */
import {store, history} from './prepare.js'

/* App configs */
import config from './config';

/* Components */
import {Layout, NotFound} from './components';
import {Home} from './components/home';

/* Routes */
export default (
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path={config.urlPrefix} component={Layout}>
          <IndexRoute component={Home} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  </AppContainer>
);
