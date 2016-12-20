import * as React from 'react';
import { StatelessComponent } from 'react';
import './layout.scss';

interface ILayout {
  children: React.ComponentElement<any, any>;
}

const Layout: StatelessComponent<ILayout> = ({ children }): any => {
  return (
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
        { children }
      </section>
      <footer>
        <p>
          <small>Hosted on GitHub Pages — Theme by
            <a href="https://github.com/orderedlist">orderedlist</a>
            and refined by
            <a href="http://kuang.it">XQ Kuang</a>
          </small>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
