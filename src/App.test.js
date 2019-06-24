import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

it('render without crashing', () => {
  shallow(<App />);
});

// it('includes StyledWrapper', () => {
//   const app = shallow(<App />);
//   expect(app.containsMatchingElement(<div />)).toEqual(true);
// });

// describe('<App/>', () => {
//   it('renders text', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists('<div/>')).to.equal(true);
//   });
// });

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<div />)).toEqual(true);
});

// describe('<App/>', () => {
//   it('renders tetxt', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.containsMatchingElement('<MainfTfffemplate />')).toEqual(true);
//   });
// });
