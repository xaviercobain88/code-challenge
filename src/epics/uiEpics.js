import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { push } from 'react-router-redux';
import { empty } from 'rxjs';
import { QUESTIONS } from '../constants/routes';
import { START_TRIVIA } from '../actions/triviaActions';

// not used
// just and example of how to manage screen transitions with redux
// not supported for react native yet
export const goToQuestions = action$ => action$
  .filter(action => action.type === START_TRIVIA)
  .mergeMap(() => {
    push(QUESTIONS);
    return empty();
  });
