declare var window: any;

/* Redux */
import { applyMiddleware, combineReducers, compose, createStore  } from 'redux';

/* React Router */
import { History } from 'history';
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';

/* Reducers */
import * as reducers from './reducers';

/* App configs */
import config from './config';

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

  const { hot } = module as any;
  if (hot) {
    // Enable Webpack hot module replacement for reducers
    hot.accept('./reducers', () => {
      const nextReducer = combineReducers(require('./reducers'));
      createdStore.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}

const store = configureStore({});

/* History */
let history: History;
if (config.historyBackend === 'hashHistory') {
  history = createHashHistory({
    basename: config.urlPrefix,
  });
} else {
  history = createBrowserHistory({
    basename: config.urlPrefix,
  });
}

export {
  store,
  history,
};
