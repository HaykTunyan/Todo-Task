import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga/index';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

export default ({ children }) => <Provider store={store} children={children} />;
