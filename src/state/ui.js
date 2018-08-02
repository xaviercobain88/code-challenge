import update from 'immutability-helper';

import {
  START_TRIVIA,
  TRIVIA_QUESTIONS_FETCHED,
  BOOLEAN_QUESTION_ANSWERED,
} from '../actions/triviaActions';

export const uiReducer = (
  state = {
    isLoading: true,
    currentQuestionNumber: 1,
  },
  action,
) => {
  switch (action.type) {
    case START_TRIVIA:
      return update(state, {
        isLoading: { $set: true },
        currentQuestionNumber: { $set: 1 },
      });
    case TRIVIA_QUESTIONS_FETCHED:
      return update(state, {
        isLoading: { $set: false },
      });
    case BOOLEAN_QUESTION_ANSWERED:
      return update(state, {
        currentQuestionNumber: { $set: state.currentQuestionNumber + 1 },
      });
    default:
      return state;
  }
};

export const getCurrentQuestionNumber = state => state.ui.currentQuestionNumber;
