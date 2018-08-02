import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';
import { H1 } from './StyledText';
import Card from './Card';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ResultWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const Text = styled.Text`
  flex: 1;
  font-size: 15;
  margin-left: 10;
  margin-bottom: 10;
`;

const Result = ({ isCorrect, question }) => (
  <Card>
    <ResultWrapper>
      <Feather
        name={isCorrect ? 'check' : 'x'}
        size={40}
        color={isCorrect ? 'green' : 'red'}
      />
      <Text>
        {question}
      </Text>
    </ResultWrapper>
  </Card>
);

Result.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
};

const Results = (props: {
  score: string,
  questions: Array<any>,
  onPlayAgain: Function
}) => (
  <Container>
    <H1>
You scored
    </H1>
    <H1>
      {props.score}
    </H1>

    <ScrollView>
      {props.questions.map(question => (
        <Result key={question.index} {...question} />
      ))}
    </ScrollView>
    <ButtonWrapper>
      <Button
        inverted
        onPress={props.onPlayAgain}
        title="PLAY AGAIN!"
        color="white"
      />
    </ButtonWrapper>
  </Container>
);

export default Results;
