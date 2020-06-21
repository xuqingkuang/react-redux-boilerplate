import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import { Welcome, mapStateToProps } from '../welcome';
import { getNextTitle } from '../../../actions/titles';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

jest.useFakeTimers();

function setup(): ISetup {
  const props = {
    getNextTitle,
  };

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Welcome getNextTitle={props.getNextTitle} />);
  const output = renderer.getRenderOutput();
  jest.clearAllTimers();

  return {
    props,
    output,
    renderer,
  };
}

describe('components', () => {
  describe('Welcome', () => {
    it('should render correctly', () => {
      const { output } = setup();
      expect(output.type).toBe('h3');
    });
    it('interval should create/destroy after component mounted/umounted', () => {
      // const { renderer, props } = setup();
      // const component = renderer.render(<Welcome getNextTitle={props.getNextTitle} />);
      // const output = renderer.getRenderOutput();
      // expect(output.interval).toBe(1);
      jest.runOnlyPendingTimers();
      // output.componentWillUnmount();
      // expect(output.interval).toBe(1);
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
        mapStateToPropsArgs.titleReducer,
      );
    });
  });
});
