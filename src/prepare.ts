/* Redux */
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';

/* React Router */
import { createBrowserHistory, createHashHistory } from 'history';

/* Reducers */
import * as reducers from './reducers';

/* App configs */
import config from './config';

declare let window: any;

/* Combine Reducers */
const reducer = combineReducers(reducers);

/* Initial the store */
function configureStore(initialState: any): any {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState, compose(
    applyMiddleware(),
    (process.env.NODE_ENV !== 'production' && window.devToolsExtension) ? window.devToolsExtension() : (f: any) => f,
  ));

  return createdStore;
}

const store = configureStore({});

/* History */
const history = (() => {
  if (config.historyBackend === 'hashHistory') {
    return createHashHistory();
  }
  return createBrowserHistory();
})();

export {
  store,
  history,
};
