// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { searchLocationSuccess } from './actions';
import { SEARCH_LOCATION } from './constants';
import { API } from '../../network';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Messages from 'constants/messages';

export function* searchLocation(args) {
  debugger;
  console.log('lan 2', args);
  try {
    const resp = yield call(API.searchLoction, args.query);
    if (resp.code === 200) {
      console.log('lan 4  ', resp);
      debugger;
      yield put(searchLocationSuccess(resp));
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
export default function* searchLocationSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SEARCH_LOCATION, searchLocation);
}
