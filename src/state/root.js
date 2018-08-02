import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { questionReducers } from './questions';

export const rootReducer = combineReducers({
  ui: uiReducer,
  questions: questionReducers,
});
