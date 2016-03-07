import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NotFound from '../not-found';

jest.unmock('../not-found');

function setup() {
  let props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<NotFound {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('NotFound', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');
      expect(output.props.children).toBe('The page you request is not exist.');
    });
  })
});
