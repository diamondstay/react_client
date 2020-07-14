// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { filterSuccess, fetchRoomNextPageSucces } from './actions';
import { FILTER, FETCH_ROOM_NEXT_PAGE } from './constants';
import { API } from '../../network';
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
      // toast(Messages.registerSuccess);
    } else {
      // debugger;
      toast('Tìm kiếm thất bại');
    }
  } catch (err) {
    // debugger;
    toast('Tìm kiếm thất bại');
  }
}
export function* fetchRoomNextPage(args) {
  debugger;
  console.log('lan 2', args);
  try {
    const resp = yield call(API.fetchRoomNextPage, args.param);
    if (resp.code === 200) {
      // console.log('lan 4  ', resp);
      // debugger;
      yield put(fetchRoomNextPageSucces(resp));
      // toast(Messages.registerSuccess);
    } else {
      // debugger;
      // toast(Messages.registerError);
    }
  } catch (err) {
    // debugger;
    // toast(Messages.registerError);
  }
}

// Individual exports for testing
export default function* searchResultPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FILTER, filter);
  yield takeLatest(FETCH_ROOM_NEXT_PAGE, fetchRoomNextPage);
}
