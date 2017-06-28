import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import NotFound from '../not-found';

interface ISetup {
  output: React.ReactElement<any>;
  renderer: TestUtils.ShallowRenderer;
}

const setup = (): ISetup => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<NotFound />);
  const output = renderer.getRenderOutput();

  return {
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
