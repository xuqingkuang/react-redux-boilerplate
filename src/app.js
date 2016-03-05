/* React */
import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/* Redux */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* Reducers */
import * as reducers from './reducers';

/* Components */
import {Layout, NotFound} from './components';
import {Home} from './components/home';

/* Combine Reducers */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

/* Initial the store */
const configureStore = (initialState) => {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}
const store = configureStore();

/* Initial history */
const history = syncHistoryWithStore(browserHistory, store)

/* Routes */
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

/* Initial the app */
ReactDOM.render(routes, document.getElementById('site'));
