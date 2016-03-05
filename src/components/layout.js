import React, { Component } from 'react';

const styles = {
  container: {
    width           : '860px',
    margin          : '0 auto'
  },
  header: {
    width           : '270px',
    float           : 'left',
    position        : 'fixed'
  },
  content: {
    width           : '500px',
    float           : 'right',
    paddingBottom   : '50px'
  },
  footer: {
    width           : '270px',
    float           : 'left',
    position        : 'fixed',
    bottom          : '50px'
  },
  link: {
    color           : '#39c',
    fontWeight      : '400',
    textDecoration  : 'none'
  }
}


export default ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>React Redux Boilerplate</h1>
        <p>
          <a href="https://github.com/xuqingkuang" style={styles.link}>View My GitHub Profile</a>
        </p>
        <p>
          <a href="https://github.com/xuqingkuang/react-redux-boilerplate" style={styles.link}>View Project Repo</a>
        </p>
      </header>
      <section style={styles.content}>
        {children}
      </section>
      <footer style={styles.footer}>
        <p><small>Hosted on GitHub Pages — Theme by <a href="https://github.com/orderedlist">orderedlist</a> and refined by <a href="http://kuang.it">XQ Kuang</a></small></p>
      </footer>
    </div>
  )
}
