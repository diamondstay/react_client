import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { API } from '../../network';
import { getRoomDetailSuccess } from './actions';
import { GET_ROOM_DETAIL } from './constants';
import { toast } from 'react-toastify';

// Individual exports for testing
export function* getRoomDetail(action) {
  try {
    const resp = yield call(API.getHotelDetail, action.id);
    if (resp.code === 200) {
      yield put(getRoomDetailSuccess(resp.data));
    } else {
      toast(resp.message);
    }
  } catch (err) {

  }
}

export default function* roomPageSaga() {
  yield takeLatest(GET_ROOM_DETAIL, getRoomDetail);
  // See example in containers/HomePage/saga.js
}
