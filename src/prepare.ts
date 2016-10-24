declare var window: any;

/* Redux */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* React Router */
import * as reactRouter from 'react-router';

/* Reducers */
import { titleReducer } from './reducers/titles';

/* App configs */
import config from './config';

/* Combine Reducers */
const reducer = combineReducers({
  routing: routerReducer,
  titleReducer,
});

/* Initial the store */
function configureStore(initialState: any): any {
  // Initial the redux devtools for Chrome
  // https://github.com/zalmoxisus/redux-devtools-extension/
  const createdStore = createStore(reducer, initialState, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  const { hot } = module as any;
  if (hot) {
    // Enable Webpack hot module replacement for reducers
    hot.accept('./reducers', () => {
      const titleReducer = require('./reducers/titles');
      const nextReducer = combineReducers({
        routing: routerReducer,
        titleReducer,
      });
      createdStore.replaceReducer(nextReducer);
    });
  }

  return createdStore;
}

export const store = configureStore({});

/* Initial history */
let routerHistory: any;
if (config.historyBackend === 'browserHistory') {
  routerHistory = reactRouter.browserHistory;
} else {
  routerHistory = reactRouter.hashHistory;
}
export const history = syncHistoryWithStore(routerHistory, store);
