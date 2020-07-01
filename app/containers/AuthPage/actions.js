/*
 *
 * AuthPage actions
 *
 */

import { DEFAULT_ACTION,
         LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,
         REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,
         RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function userLogin() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function userRegister() {
  return {
    type: REGISTER,
  };
}

export function registerSuccess(response) {
  return {
    type: REGISTER_SUCCESS,
    response,
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
  };
}

export function userResetPassword() {
  return {
    type: RESET_PASSWORD,
  };
}

export function resetPasswordSuccess(response) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    response,
  };
}

export function resetPasswordError() {
  return {
    type: RESET_PASSWORD_ERROR,
  };
}

