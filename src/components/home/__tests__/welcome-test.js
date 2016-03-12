import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Welcome, mapStateToProps} from '../welcome';
import {getNextTitle} from '../../../actions/titles';

jest.unmock('../welcome');

function setup() {
  let props = {
    getNextTitle: getNextTitle
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Welcome {...props} />);
  let output = renderer.getRenderOutput();
  jest.clearAllTimers()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('Welcome', () => {
    it('should render correctly', () => {
      const {output} = setup();
      expect(output.type).toBe('h3');
    });
    it('interval should create/destroy after component mounted/umounted', () => {
      const {props} = setup();
      const component = TestUtils.renderIntoDocument(<Welcome {...props} />);
      expect(component.interval).toBe(1);
      jest.runOnlyPendingTimers();
      component.componentWillUnmount()
      expect(component.interval).toBe(1);
    });
    it('title clicked should update text content', () => {
      // TODO: Need to test componentDidMount and componentWillUnmount
      const {output} = setup();
      // FIXME: Need a better way to test the clicked callback
      expect(output.props.onClick()).toBe(undefined);
      // Workaround to test mapStateToProps
      const mapStateToPropsArgs = {
        titles: {
          title: 'test'
        }
      };
      expect(mapStateToProps(mapStateToPropsArgs)).toEqual(mapStateToPropsArgs.titles);
    });
  })
});
