import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Start from '../presentationals/Start';
import { startTrivia } from '../../actions/triviaActions';

const mapDispatchToProps = (dispatch, { history }) => ({
  onBegin: () => {
    history.push('/questions');// This should be handled by uiEpics.js (take a look to uiEpics.js) but react-router-redux is not supporting that yet
    return dispatch(startTrivia());
  },
});

const mapStateToProps = () => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Start),
);
