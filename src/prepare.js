/* Redux */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* React Router */
import * as reactRouter from 'react-router';

/* Reducers */
import * as reducers from './reducers';

/* App configs */
import config from './config';

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
      const reducers = require('./reducers');
      const nextReducer = combineReducers({
        ...reducers,
        routing: routerReducer
      });
      store.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}
export const store = configureStore();

/* Initial history */
export const history = syncHistoryWithStore(
  reactRouter[config.historyBackend], store
)
