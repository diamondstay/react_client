// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { filterSuccess } from './actions';
import { FILTER } from './constants';
import { API } from '../../network';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Messages from 'constants/messages';

export function* filter(args) {
  debugger;
  console.log('lan 2', args);
  try {
    const resp = yield call(API.filter, args.param);
    if (resp.code === 200) {
      // console.log('lan 4  ', resp);
      // debugger;
      yield put(filterSuccess(resp));
      toast(Messages.registerSuccess);
    } else {
      // debugger;
      toast(Messages.registerError);
    }
  } catch (err) {
    // debugger;
    toast(Messages.registerError);
  }
}

// Individual exports for testing
export default function* searchResultPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FILTER, filter);
}
