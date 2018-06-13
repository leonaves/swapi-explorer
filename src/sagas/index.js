import { call, put, takeLatest } from 'redux-saga/effects'
import SWApi from '../network/SWApi';

function* fetchData(action) {
  try {
    const data = yield call(SWApi.fetchData, action.payload.endpoint);
    yield put({ type: 'DATA_FETCH_SUCCEEDED', payload: { data } });
  } catch (e) {
    yield put({type: 'DATA_FETCH_FAILED', payload: { error: e.message } });
  }
}

function* requestInitiator() {
  yield takeLatest('FETCH_DATA', fetchData);
}

export default requestInitiator;
