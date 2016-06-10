import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';

const rootEl = document.getElementById('site')

/* Start the app */
ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      rootEl
    );
  })
}
