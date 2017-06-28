/* Import the requirements */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

/* Start the app */

((nodeEnv) => {
  const rootEl = document.getElementById('site');

  // Use development routes with react hot loader
  if (nodeEnv !== 'production') {
    const reactHotLoader =  require('react-hot-loader');
    const { AppContainer } = reactHotLoader;
    return ReactDOM.render((
      <AppContainer>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppContainer>
    ), rootEl);
  }

  // Render the production routes
  return ReactDOM.render((
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ), rootEl);
})(process.env.NODE_ENV);
