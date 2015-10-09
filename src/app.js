import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, (Handler) => {
  return React.render(<Handler />, document.body);
});
