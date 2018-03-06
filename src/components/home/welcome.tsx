import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getNextTitle } from '../../actions/titles';
import { IReducer } from '../../reducers';

interface IConnectedProps {
  getNextTitle?: any;
}

// Welcome component
interface IProps extends IConnectedProps {
  title?: string;
}

// Export the class for testing
export class Welcome extends Component<IProps, {}> {

  private interval: any;

  public componentDidMount() {
    this.interval = setInterval(() => {
      const { getNextTitle: gnt, title } = this.props;
      gnt(title);
    }, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    const { getNextTitle: gnt, title } = this.props;
    return (
      <h3 onClick={ () => gnt(title) }>
        Welcome to { title }.
      </h3>
    );
  }
}

// State to props for connect argument
export const mapStateToProps = (state: IReducer): IProps => {
  return {
    title: state.titleReducer.title,
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getNextTitle,
};

// Conect the component with Redux
export default connect<IConnectedProps, IConnectedProps, void>(mapStateToProps, mapDispatchToProps)(Welcome);
