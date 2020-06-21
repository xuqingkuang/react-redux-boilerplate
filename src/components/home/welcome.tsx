import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getNextTitle } from '../../actions/titles';
import { IReducer } from '../../reducers';

interface IConnectedProps {
  getNextTitle?: Function;
  title?: string;
}

// Welcome component
interface IProps extends IConnectedProps {}

// Export the class for testing
export class Welcome extends Component<IProps, {}> {
  private interval: number;

  public componentDidMount() {
    this.interval = window.setInterval(() => {
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
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <h3 onClick={() => gnt(title)} onKeyPress={() => gnt(title)}>
        Welcome to
        {' '}
        { title }
        .
      </h3>
    );
  }
}

// State to props for connect argument
export const mapStateToProps = (state: IReducer): IProps => ({
  title: state.titleReducer.title,
});

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getNextTitle,
};

// Conect the component with Redux
export default connect<IConnectedProps, IConnectedProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
