/* Promise polyfill */
declare var window: any;
import * as Promise from 'bluebird';
window.Promise = Promise;

/* Import the requirements */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';

/* Start the app */
const rootEl = document.getElementById('site');
ReactDOM.render(<Routes />, rootEl);
