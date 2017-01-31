import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button.js';

test('Button renders correctly', () => {
  const tree = renderer.create(<Button label="hello"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
