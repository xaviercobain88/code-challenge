import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import Placeholder from 'rn-placeholder';
import { H1, H2 } from './StyledText';

import Card from './Card';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import * as colors from '../../constants/colors';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-horizontal: 20;
   align-items: center;
`;


const BooleanQuestion = ({
  onTrue,
  onFalse,
  questionNumber,
  totalQuestions,
  isLoading,
  category,
  question,
  falseButtonText,
  trueButtonText,
}) => (
  <Container>
    <H1>
      {!isLoading && category}
    </H1>

    <Card>
      <Placeholder.Paragraph
        lineNumber={2}
        textSize={18}
        animate="fade"
        lineSpacing={5}
        width="100%"
        lastLineWidth="80%"
        onReady={!isLoading}
      >
        <H2>
          {question}
        </H2>

        <ButtonWrapper>
          <Button
            onPress={onTrue}
            title={trueButtonText}
            color={colors.secondaryColor}
          />
          <Button
            onPress={onFalse}
            title={falseButtonText}
            color={colors.secondaryColor}
          />
        </ButtonWrapper>
      </Placeholder.Paragraph>
    </Card>
    {!isLoading ? (
      <H1>
        {`${questionNumber} / ${totalQuestions}`}
      </H1>
    ) : (
      <H1>
-/-
      </H1>
    )}
  </Container>
);

BooleanQuestion.propTypes = {
  onTrue: PropTypes.func.isRequired,
  onFalse: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  falseButtonText: PropTypes.string.isRequired,
  trueButtonText: PropTypes.string.isRequired,
};

export default compose(
  withState('falseButtonText', 'setFalseButtonText', 'False'),
  withState('trueButtonText', 'setTrueButtonText', 'True'),
  withHandlers({
    onFalse: ({ onFalse, answer, setFalseButtonText }) => () => {
      if (answer === 'false') setFalseButtonText('Great!!!!');
      else setFalseButtonText(":'(");
      setTimeout(() => {
        onFalse();
        setFalseButtonText('False');
      }, 600);
    },
    onTrue: ({ onTrue, answer, setTrueButtonText }) => () => {
      if (answer === 'true') setTrueButtonText('Great!!!!');
      else setTrueButtonText(":'(");
      setTimeout(() => {
        onTrue();
        setTrueButtonText('True');
      }, 600);
    },
  }),
)(BooleanQuestion);
