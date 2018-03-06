import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import NotFound from '../not-found';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

function setup(): ISetup {
  const props = {};

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<NotFound {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('components', () => {
  describe('NotFound', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');
      expect(output.props.children).toBe('The page you request is not exist.');
    });
  });
});
