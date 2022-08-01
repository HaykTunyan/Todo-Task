import { takeLeading, put, call } from 'redux-saga/effects';

export const generateWatcher = ({ actionType, service, take = takeLeading }) =>
  function* () {
    const { WATCH } = actionType;
    yield take(WATCH, ({ payload }) => generateWorker({ payload, actionType, service }));
  };

const generateWorker = ({ payload, actionType, service }) =>
  (function* () {
    const { LOAD, SUCCESS, FAIL } = actionType;
    try {
      yield put({ type: LOAD });
      const response = service ? yield call(service, payload) : payload;
      yield put({ type: SUCCESS, params: payload, response: response?.data });
      if (payload?.afterSuccess) {
        yield call(payload.afterSuccess, { response: response?.data });
      }
    } catch (error) {
      console.log('error', error);
      yield put({ type: FAIL, response: error });
      if (payload?.afterFail) {
        yield call(payload.afterFail, { error });
      }
    }
  })();
