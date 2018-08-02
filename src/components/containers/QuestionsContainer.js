import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as _ from 'lodash';
import BooleanQuestion from '../presentationals/BooleanQuestion';
import {
  booleanQuestionAnswered,
} from '../../actions/triviaActions';
import { getCurrentQuestionNumber } from '../../state/ui';
import {
  currentQuestionSelector,
  totalQuestionsSelector,
} from '../../state/questions';
import * as routes from '../../constants/routes';

const mapDispatchToProps = (dispatch, { history }) => ({
  onTrue: (questionNumber, totalQuestions) => () => {
    if (questionNumber < totalQuestions) { dispatch(booleanQuestionAnswered(questionNumber, 'true')); } else history.push(routes.RESULTS);
  },
  onFalse: (questionNumber, totalQuestions) => () => {
    if (questionNumber < totalQuestions) { dispatch(booleanQuestionAnswered(questionNumber, 'false')); } else history.push(routes.RESULTS);
  },
});

const mapStateToProps = (state) => {
  const currentQuestion = currentQuestionSelector(state);
  return {
    question: currentQuestion && _.unescape(currentQuestion.question),
    category: currentQuestion && _.unescape(currentQuestion.category),
    answer:
      currentQuestion && currentQuestion.correct_answer.trim().toLowerCase(),
    questionNumber: getCurrentQuestionNumber(state),
    totalQuestions: totalQuestionsSelector(state),
    isLoading: state.ui.isLoading,
  };
};

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  onTrue: dispatchProps.onTrue(
    stateProps.questionNumber,
    stateProps.totalQuestions,
  ),
  onFalse: dispatchProps.onFalse(
    stateProps.questionNumber,
    stateProps.totalQuestions,
  ),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  )(BooleanQuestion),
);
