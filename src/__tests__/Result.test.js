import React from 'react';
import renderer from 'react-test-renderer';
import Results from '../components/presentationals/Results';
import 'jest-styled-components';

const props = {
  score: '',
  questions: [],
  onPlayAgain: () => ({}),
};

test('renders correctly', () => {
  const tree = renderer.create(<Results {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
