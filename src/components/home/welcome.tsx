import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getNextTitle } from '../../actions/titles';

interface IConnectedProps {
  getNextTitle?: any;
}

// Welcome component
interface IProps extends IConnectedProps {
  title?: string;
};

// Export the class for testing
export class Welcome extends Component<IProps, void> {

  private interval: any;

  public componentDidMount() {
    this.interval = setInterval(() => {
      const { getNextTitle, title } = this.props;
      getNextTitle(title);
    }, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    const { getNextTitle, title } = this.props;
    return (
      <h3 onClick={ () => getNextTitle(title) }>
        Welcome to { title }.
      </h3>
    );
  }
}

// State to props for connect argument
export const mapStateToProps = (state: any): IProps => {
  return {
    title: state.titleReducer.title,
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getNextTitle,
};

// Conect the component with Redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
