import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import {Welcome, mapStateToProps} from '../welcome';
import {getNextTitle} from '../../../actions/titles';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

jest.useFakeTimers();

const setup = (): ISetup => {
  const props = {
    getNextTitle: getNextTitle,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Welcome getNextTitle={ props.getNextTitle } />);
  const output = renderer.getRenderOutput();
  jest.clearAllTimers();

  return {
    props,
    output,
    renderer,
  };
};

describe('components', () => {
  describe('Welcome', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('h3');
    });
    it('interval should create/destroy after component mounted/umounted', () => {
      const { props } = setup();
      const component = TestUtils.renderIntoDocument(<Welcome getNextTitle={ props.getNextTitle } />);
      expect(component.interval).toBe(1);
      jest.runOnlyPendingTimers();
      component.componentWillUnmount();
      expect(component.interval).toBe(1);
    });
    it('title clicked should update text content', () => {
      // TODO: Need to test componentDidMount and componentWillUnmount
      const { output } = setup();
      // FIXME: Need a better way to test the clicked callback
      expect(output.props.onClick()).toEqual({
        type: 'GET_NEXT_TITLE',
        title: 'React Redux Boilerplate',
      });
      // Workaround to test mapStateToProps
      const mapStateToPropsArgs = {
        titleReducer: {
          title: 'test',
        },
      };
      expect(mapStateToProps(mapStateToPropsArgs)).toEqual(
        mapStateToPropsArgs.titleReducer
      );
    });
  });
});
