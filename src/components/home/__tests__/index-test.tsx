import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../index';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

function setup(): ISetup {
  const props = {};

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<Home {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('components', () => {
  describe('Layout', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');

      const children = output.props.children;
      expect(children[0].type.displayName).toBe('Connect(Welcome)');
    });
  });
});
