import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { API } from '../../network';
import { getRoomDetailSuccess } from './actions';
import { GET_ROOM_DETAIL } from './constants';

// Individual exports for testing
export function* getRoomDetail(action) {
  try {
    const roomDetailResp = yield call(API.getHotelDetail, action.id);
    yield put(getRoomDetailSuccess(roomDetailResp.data));
  } catch (err) {

  }
}

export default function* roomPageSaga() {
  yield takeLatest(GET_ROOM_DETAIL, getRoomDetail);
  // See example in containers/HomePage/saga.js
}
