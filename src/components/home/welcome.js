import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {getNextTitle} from '../../actions/titles';

// Welcome component
// Export the class for testing
export class Welcome extends Component {

  // Defined the props type required
  static propTypes = {
    title: PropTypes.string,
    getNextTitle: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {getNextTitle, title} = this.props;
      getNextTitle(title);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {getNextTitle, title} = this.props;
    return (<h3 onClick={() => getNextTitle(title)}>Welcome to {title}.</h3>);
  }
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
