import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import StartContainer from './containers/StartContainer';
import QuestionsContainer from './containers/QuestionsContainer';
import ResultsContainer from './containers/ResultsContainer';
import ScreenWrapper from './presentationals/ScreenWrapper';
import * as routes from '../constants/routes';

const MainRouter = () => (
  <NativeRouter>
    <ScreenWrapper>
      <Route exact path={routes.ROOT} component={StartContainer} />
      <Route exact path={routes.QUESTIONS} component={QuestionsContainer} />
      <Route exact path={routes.RESULTS} component={ResultsContainer} />
    </ScreenWrapper>
  </NativeRouter>
);

export default MainRouter;
