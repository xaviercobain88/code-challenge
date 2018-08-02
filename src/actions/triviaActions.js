// @flow
export const START_TRIVIA = 'START_TRIVIA';
export const TRIVIA_QUESTIONS_FETCHED = 'TRIVIA_QUESTIONS_FETCHED';
export const BOOLEAN_QUESTION_ANSWERED = 'BOOLEAN_QUESTION_ANSWERED';

export const startTrivia = () => ({ type: START_TRIVIA });
export const triviaQuestionsFetched = (questions: string) => ({
  type: TRIVIA_QUESTIONS_FETCHED,
  questions,
});
export const booleanQuestionAnswered = (
  questionNumber: number,
  answer: string,
) => ({
  type: BOOLEAN_QUESTION_ANSWERED,
  questionNumber,
  answer,
});
