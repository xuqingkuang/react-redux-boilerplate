import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {getNextTitle} from '../../actions/titles';

// Welcome component
// Export the class for testing
export class Welcome extends Component {

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

// Defined the props type required
Welcome.propTypes = {
  getNextTitle: PropTypes.func.isRequired
}

// State to props for connect argument
export const mapStateToProps = (state) => {
  return {
    title: state.titles.title
  };
}

// Dispatch to props for connect argument
const mapDispatchToProps = { getNextTitle }

// Conect the component with Redux
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
