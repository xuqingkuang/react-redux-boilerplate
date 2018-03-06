import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import App from '../app';

interface ISetup {
  props: any;
  output: any;
  renderer: any;
}

function setup(): ISetup {
  const props = {
    children: (
      <div></div>
    ),
  };

  const renderer = ShallowRenderer.createRenderer();
  renderer.render(<App {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
};

describe('components', () => {
  describe('App', () => {
    it('should render correctly', () => {
      const {output} = setup();

      /*
      expect(output.type).toBe('div');

      const [header, section, footer] = output.props.children;
      expect(header.type).toBe('header');
      expect(section.type).toBe('section');
      expect(footer.type).toBe('footer');
      */
    });
  });
});
