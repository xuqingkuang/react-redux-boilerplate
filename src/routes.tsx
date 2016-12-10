/* React */
import * as React from 'react';
import { StatelessComponent } from 'react';

/* React Router */
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

/* Router dependencies preparing */
import { history, store } from './prepare';

/* App configs */
import config from './config';

/* Components */
import { Layout, NotFound } from './components';
import { Home } from './components/home';

/* Routes */
const { urlPrefix } = config;
const Routes: StatelessComponent<any> = (): any => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path={ urlPrefix } component={ Layout }>
          <IndexRoute component={ Home } />
        </Route>
        <Route path="*" component={ NotFound } />
      </Router>
    </Provider>
  );
};

export default Routes;
