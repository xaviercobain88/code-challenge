import React from 'react';
import PropTypes from 'prop-types';
import { SimpleLineIcons } from '@expo/vector-icons';
import styled from 'styled-components';
import { H1, H2 } from './StyledText';
import Card from './Card';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import * as colors from '../../constants/colors';

const Container = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Start = ({ onBegin }) => (
  <Container>
    <H1>
Welcome to the Trivia Challenge!
    </H1>

    <Card>
      <H2>
You will be presented with 10 True or False questions.
      </H2>
      <H2>
Can you score 100%?
      </H2>
      <ButtonWrapper>
        <Button
          onPress={onBegin}
          title="BEGIN"
          color={colors.secondaryColor}
        />
      </ButtonWrapper>
    </Card>

    <SimpleLineIcons name="trophy" size={40} color="white" />
  </Container>
);

Start.propTypes = {
  onBegin: PropTypes.func.isRequired,
};

export default Start;
