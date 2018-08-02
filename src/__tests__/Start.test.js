import React from 'react';
import renderer from 'react-test-renderer';
import Start from '../components/presentationals/Start';
import 'jest-styled-components';

const props = {
  onBegin: () => ({}),
};

test('renders correctly', () => {
  const tree = renderer.create(<Start {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
