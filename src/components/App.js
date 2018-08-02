import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from '../state/root';
import MainRouter from './MainRouter';
import rootEpic from '../epics/rootEpic';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

const App = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);

export default App;
