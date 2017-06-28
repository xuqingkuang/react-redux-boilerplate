/* React */
import * as React from 'react';
import { StatelessComponent } from 'react';

/* React Router */
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';

/* Router dependencies preparing */
import { history, store } from './prepare';

/* Components */
import { Layout, NotFound } from './components';
import { Home } from './components/home';

/* Routes */
const Routes: StatelessComponent<{}> = (): React.ReactElement<{}> => {
  return (
    <Provider store={ store }>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </Layout>
    </Provider>
  );
};

export default Routes;
