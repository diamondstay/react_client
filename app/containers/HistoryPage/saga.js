import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { API } from '../../network';
import { GET_HISTORY_LIST } from './constants';
import { getHistoryListSuccess } from './actions';
import { toast } from 'react-toastify';

// Individual exports for testing
export function* getHistoryList(args) {
  try {
    const resp = yield call(API.getHistoryList, args.status, args.fromMonth, args.toMonth, args.page, args.limit);
    if (resp.code === 200) {
      yield put(getHistoryListSuccess(resp.data));
    } else {
      toast(resp.message);
    }
  } catch (err) {

  }
}

export default function* historyPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_HISTORY_LIST, getHistoryList);
}
