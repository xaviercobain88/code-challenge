import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as _ from 'lodash';
import * as routes from '../../constants/routes';
import Results from '../presentationals/Results';
import { getQuestions, totalQuestionsSelector } from '../../state/questions';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state, { history }) => {
  const questions = getQuestions(state).map(question => ({
    ...question,
    question: _.unescape(question.question),
    isCorrect: question.correct_answer.toLowerCase() === question.answer,
  }));
  return {
    score: `${
      questions.filter(question => question.isCorrect).length
    } / ${totalQuestionsSelector(state)}`,
    questions,
    onPlayAgain: () => history.push(routes.ROOT),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Results),
);
