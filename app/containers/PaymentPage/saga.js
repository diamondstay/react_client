import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { API } from '../../network';
import { getPaymentRequestSuccess } from './actions';
import { GET_PAYMENT_REQUEST } from './constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Messages from 'constants/messages';
import { push } from 'react-router-redux';

// Individual exports for testing
export function* getPaymentRequest(action) {
  try {
    const resp = yield call(API.getPaymentRequest, action.id);
    if (resp.code === 200) {
      yield put(getPaymentRequestSuccess(resp));
      toast(Messages.paySuccess);
      // yield put(push('/')); // Redirect to Home page
      window.open(resp.data);

    } else {
      toast(resp.message);
    }
  } catch (err) {
    toast(Messages.payError);
  }
}

export default function* paymentPageSaga() {
  yield takeLatest(GET_PAYMENT_REQUEST, getPaymentRequest);
  // See example in containers/HomePage/saga.js
}
