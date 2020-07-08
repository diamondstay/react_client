// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { submitBookingSuccess } from './actions';
import { SUBMIT_BOOKING } from './constants';
import { API } from '../../network';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Messages from 'constants/messages';
import { push } from 'react-router-redux';
import reactLocalStorage from 'utils/localStorage';

export function* submitBooking(args) {
  try {
    const resp = yield call(API.booking, args.data);
    const bookingInfo = reactLocalStorage.getObject('booking-info');
    if (resp.code === 200) {
      yield put(submitBookingSuccess(resp));
      toast(Messages.bookingSuccess);
      yield put(push('/checkout/payment/' + bookingInfo.aid)); // Redirect to Payment page
    } else {
      toast(Messages.bookingError);
    }
  } catch (err) {
    toast(Messages.bookingError);
  }
}

// Individual exports for testing
export default function* bookingPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_BOOKING, submitBooking);
}
