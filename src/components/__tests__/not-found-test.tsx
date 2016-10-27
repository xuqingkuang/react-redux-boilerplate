import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import NotFound from '../not-found';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

const setup = (): ISetup => {
  const props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<NotFound {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

describe('components', () => {
  describe('NotFound', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');
      expect(output.props.children).toBe('The page you request is not exist.');
    });
  });
});
