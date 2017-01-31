import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../src/components/Message.js';

test('Message renders correctly', () => {
  const tree = renderer.create(<Message/>).toJSON();
  expect(tree).toMatchSnapshot();
});
