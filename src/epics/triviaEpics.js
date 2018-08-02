import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { START_TRIVIA, triviaQuestionsFetched } from '../actions/triviaActions';
import { QUESTIONS_ENDPOINT } from '../constants/endpoints';

export const fetchTriviaQuestions = action$ => action$
  .filter(action => action.type === START_TRIVIA)
  .mergeMap(() => ajax
    .getJSON(QUESTIONS_ENDPOINT)
    .catch(() => empty()) // It's just loading forever for now
    .delay(700) // Just to see placeholder
    .map(response => triviaQuestionsFetched(response)));
