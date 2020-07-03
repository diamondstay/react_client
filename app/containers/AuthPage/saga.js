// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest  } from 'redux-saga/effects';
import { loginSuccess,  registerSuccess,  resetPasswordSuccess } from './actions';
import { LOGIN, REGISTER, RESET_PASSWORD } from './constants';
import { API } from '../../network';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Messages from 'constants/messages';
import { push } from 'react-router-redux';
import reactLocalStorage from 'utils/localStorage';

export function* userLogin(args) {
  try {
    const resp = yield call(API.login, args.data);
    if (resp.code === 200) {
      yield put(loginSuccess(resp));
      toast(Messages.loginSuccess);
      yield call(reactLocalStorage.setObject, 'user-account', resp.data);
      yield put(push('/')); // Redirect to Home page
    } else {
      toast(Messages.loginError);
    }
  } catch (err) {
    toast(Messages.loginError);
  }
}

export function* userRegister(args) {
  try {
    const resp = yield call(API.register, args.data);
    if (resp.code === 200) {
      yield put(registerSuccess(resp));
      // toast(Messages.registerSuccess);
      yield put(push('/thank-you')); // Redirect to Thank you page
    } else {
      toast(Messages.registerError);
    }
  } catch (err) {
    toast(Messages.registerError);
  }
}

export function* resetPassword(args) {
  try {
    const resp = yield call(API.resetPassword, args.data);
    if (resp.code === 200) {
      yield put(resetPasswordSuccess(resp));
      toast(Messages.resetPasswordSuccess);
    } else {
      toast(Messages.resetPasswordError);
    }
  } catch (err) {
    toast(Messages.resetPasswordError);
  }
}

// Individual exports for testing
export default function* authPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, userLogin);
  yield takeLatest(REGISTER, userRegister);
  yield takeLatest(RESET_PASSWORD, resetPassword);
}
