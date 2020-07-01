// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest  } from 'redux-saga/effects';
import { loginSuccess,  registerSuccess,  resetPasswordSuccess } from './actions';
import { LOGIN, REGISTER, RESET_PASSWORD } from './constants';
import { API } from '../../network';
import { showAlert } from 'containers/App/actions';

export function* login(args) {
  try {
    const resp = yield call(API.login, args.data);
    if (resp.code === 200) {
      yield put(loginSuccess(resp));
      yield put(showAlert({ type: 'success', message: messages.loginSuccess }));
    } else {
      yield put(showAlert({ type: 'error', message: resp.messages }));
    }
  } catch (err) {
    yield put(showAlert({ type: 'error', message: messages.error }));
  }
}

export function* register(args) {
  try {
    const resp = yield call(API.register, args.data);
    if (resp.code === 200) {
      yield put(registerSuccess(resp));
      yield put(showAlert({ type: 'success', message: messages.registerSuccess }));
    } else {
      yield put(showAlert({ type: 'error', message: resp.messages }));
    }
  } catch (err) {
    yield put(showAlert({ type: 'error', message: messages.error }));
  }
}

export function* resetPassword(args) {
  try {
    const resp = yield call(API.resetPassword, args.data);
    if (resp.code === 200) {
      yield put(resetPasswordSuccess(resp));
      yield put(showAlert({ type: 'success', message: messages.resetPasswordSuccess }));
    } else {
      yield put(showAlert({ type: 'error', message: resp.messages }));
    }
  } catch (err) {
    yield put(showAlert({ type: 'error', message: messages.error }));
  }
}

// Individual exports for testing
export default function* authPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(RESET_PASSWORD, resetPassword);
}
