import React from 'react';
import renderer from 'react-test-renderer';
import ResponseOption from '../src/components/ResponseOption.js';

test('ResponseOption renders correctly', () => {
  const tree = renderer.create(
    <ResponseOption
      response={{text: 'hello', next: 2}}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Updating ResponseOption works correctly', () => {
  const mockClick = jest.fn();
  const tree = renderer.create(
    <ResponseOption
      response={{text: 'hello', next: 2}}
      updateMessage={mockClick}
    />).toJSON();
  tree.props.onClick();
  expect(tree).toMatchSnapshot();
  expect(mockClick.mock.calls.length).toBe(1);
});
