import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {getNextTitle} from '../../actions/titles';

class Home extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      let {getNextTitle, title} = this.props;
      getNextTitle(title);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {getNextTitle, title} = this.props;

    return (<h3 onClick={() => getNextTitle(title)}>Welcome to {title}.</h3>);
  }
}

Home.propTypes = {
  getNextTitle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    title: state.titles.title
  };
}

const mapDispatchToProps = { getNextTitle }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
