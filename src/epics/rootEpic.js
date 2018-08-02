import { combineEpics } from 'redux-observable';
import { fetchTriviaQuestions } from './triviaEpics';

const rootEpic = combineEpics(fetchTriviaQuestions);
export default rootEpic;
