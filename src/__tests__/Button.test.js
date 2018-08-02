import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/presentationals/Button';
import 'jest-styled-components';

const props = {
  inverted: true,
  onPress: () => ({}),
  title: 'PLAY AGAIN!',
  color: 'white',
};

test('renders correctly', () => {
  const tree = renderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
