import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../src/components/Menu.js';

test('Menu renders correctly', () => {
  const tree = renderer.create(<Menu/>).toJSON();
  expect(tree).toMatchSnapshot();
});
