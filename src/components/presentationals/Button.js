import React from 'react';
import styled from 'styled-components';
import { Button as Btn } from 'react-native';
import * as colors from '../../constants/colors';

const Container = styled.View`
  border-color: ${props => (props.inverted ? 'white' : colors.secondaryColor)};
  margin-horizontal: 10;
  margin-vertical: 10;
  padding-vertical: 5;
  border-radius: 30;
  border-width: 2;
  width: 120;
`;

const Button = props => (
  <Container {...props}>
    <Btn {...props} />
  </Container>
);

export default Button;
