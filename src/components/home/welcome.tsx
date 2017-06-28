import * as React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { getNextTitle } from '../../actions/titles';

interface IConnectedProps {
  title: string;
}

// Welcome component
interface IProps extends IConnectedProps {
  getNextTitle: (currentTitle: string) => void;
}

// Export the class for testing
class Welcome extends PureComponent<IProps> {

  public interval: any;

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
const mapStateToProps = (state: IState): IConnectedProps => {
  return {
    title: state.titleReducer.title,
  };
};

// Dispatch to props for connect argument
const mapDispatchToProps = {
  getNextTitle,
};

// Conect the component with Redux
export default connect<IConnectedProps, IProps, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
export {
  Welcome,
  mapStateToProps,
};
