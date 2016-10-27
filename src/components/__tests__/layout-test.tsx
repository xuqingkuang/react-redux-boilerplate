import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import Layout from '../layout';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

const setup = (): ISetup => {
  const props = {
    children: (
      <div></div>
    ),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Layout {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

describe('components', () => {
  describe('Layout', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');

      const [header, section, footer] = output.props.children;
      expect(header.type).toBe('header');
      expect(section.type).toBe('section');
      expect(footer.type).toBe('footer');
    });
  });
});
