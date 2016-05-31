import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Layout from '../layout';

jest.unmock('../layout');
jest.unmock('../welcome');

function setup() {
  let props = {};

  const renderer = TestUtils.createRenderer();
  renderer.render(<Layout {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('Layout', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');

      const children = output.props.children;
      expect(children[0].type.displayName).toBe('Connect(Welcome)');
    });
  })
});
