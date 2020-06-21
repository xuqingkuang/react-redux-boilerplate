/* React */
import * as React from 'react';
import { StatelessComponent } from 'react';
import { Router, Switch, Route } from 'react-router';

/* React Router */
import { Provider } from 'react-redux';

/* Router dependencies preparing */
import { history, store } from '../prepare';

/* Components */
import Home from './home';
import NotFound from './not-found';

/* Styles */
import './app.less';

/* Routes */
const App: StatelessComponent<{}> = (): any => (
  <Provider store={store}>
    <Router history={history}>
      <div className="container">
        <header>
          <h1>React Redux Boilerplate</h1>
          <p>
            <a href="https://github.com/xuqingkuang">View My GitHub Profile</a>
          </p>
          <p>
            <a href="https://github.com/xuqingkuang/react-redux-boilerplate">
              View Project Repo
            </a>
          </p>
        </header>
        <section className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </section>
        <footer>
          <p>
            <small>
              Hosted on GitHub Pages — Theme by
              { ' ' }
              <a href="https://github.com/orderedlist">orderedlist</a>
              { ' ' }
              and refined by
              { ' ' }
              <a href="http://kxq.io">XQ Kuang</a>
            </small>
          </p>
        </footer>
      </div>
    </Router>
  </Provider>
);

export default App;
