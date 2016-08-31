declare var window:any;

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
  title: titleReducer
});

/* Initial the store */
export const store = createStore(reducer, null, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));;

/* Initial history */
export const history = syncHistoryWithStore(
  reactRouter[config.historyBackend], store
);
