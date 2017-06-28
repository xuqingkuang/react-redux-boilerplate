declare var window: any;

interface IHotNodeModule extends NodeModule {
  hot: {
    accept: (path: string, callback: () => void) => void;
  };
}

declare var module: IHotNodeModule;

// Redux
import { applyMiddleware, combineReducers, compose, createStore, Store  } from 'redux';

// React router
import { createBrowserHistory, createHashHistory } from 'history';
import { LOCATION_CHANGED } from './constants';

/* Reducers */
import * as reducers from './reducers';

/* App configs */
import config from './config';

/**
 * Combine reduers
 */
const reducer = combineReducers({
  ...reducers,
});

/**
 * initial redux store
 */
function configureStore(initialState = {}): Store<{}> {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState, compose(
    applyMiddleware(),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : (f: any) => f,
  ));

  const { hot } = module;
  if (hot) {
    // Enable Webpack hot module replacement for reducers
    hot.accept('./reducers', () => {
      const reducers = require('./reducers');
      const nextReducer = combineReducers(reducers);
      createdStore.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}

const store = configureStore();

/**
 * Create history
 * and dispatch the location changed event.
 */
const history = ((historyMethod) => {
  switch (historyMethod) {
    case 'browser': {
      return createBrowserHistory({
        basename: config.router.basename,
      });
    }
    case 'hash': {
      return createHashHistory({
        basename: config.router.basename,
      });
    }
    default:
      throw new TypeError(`Unsupport router history method: ${historyMethod}`);
  }
})(config.router.method);
// Sync the history changes to store.
history.listen((location) => {
  store.dispatch({
    type: LOCATION_CHANGED,
    payload: {
      location,
    },
  });
});

export {
  store,
  history,
};
