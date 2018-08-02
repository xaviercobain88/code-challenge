import update from 'immutability-helper';
import { createSelector } from 'reselect';
import {
  TRIVIA_QUESTIONS_FETCHED,
  BOOLEAN_QUESTION_ANSWERED,
} from '../actions/triviaActions';
import { getCurrentQuestionNumber } from './ui';

export const questionReducers = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case TRIVIA_QUESTIONS_FETCHED:
      return action.questions.results.map((item, index) => ({
        ...item,
        answer: null,
        index,
      }));
    case BOOLEAN_QUESTION_ANSWERED:
      const item = state[action.questionNumber - 1];
      return update(state, {
        [action.questionNumber - 1]: {
          $set: { ...item, answer: action.answer },
        },
      });
    default:
      return state;
  }
};

export const getQuestions = state => state.questions;
export const currentQuestionSelector = createSelector(
  [getCurrentQuestionNumber, getQuestions],
  (currentQuestionNumber, questions) => questions[currentQuestionNumber - 1],
);

export const totalQuestionsSelector = createSelector(
  [getQuestions],
  questions => questions.length,
);
