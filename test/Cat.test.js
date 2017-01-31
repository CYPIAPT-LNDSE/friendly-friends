import React from 'react';
import renderer from 'react-test-renderer';
import Cat from '../src/components/Cat.js';

test('Cat renders correctly', () => {
  const tree = renderer.create(<Cat/>).toJSON();
  expect(tree).toMatchSnapshot();
});
