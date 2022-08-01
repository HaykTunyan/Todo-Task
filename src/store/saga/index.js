import { all, fork } from 'redux-saga/effects';
import * as todo from './todo'

const combineSagas = {
  ...todo,
};

export default function* rootSaga() {
  yield all(Object.values(combineSagas).map((saga) => fork(saga)));
}
