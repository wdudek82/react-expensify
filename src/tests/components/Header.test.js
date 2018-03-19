import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import HelpPage from '../../components/HelpPage';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // Enzyme
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  // react-test-render
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});