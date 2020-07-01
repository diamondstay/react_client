/*
 *
 * AuthPage reducer
 *
 */
import produce from 'immer';
import {
  LOGIN, LOGIN_ERROR, LOGIN_SUCCESS,
  REGISTER, REGISTER_SUCCESS, REGISTER_ERROR,
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.login = true;
        draft.error = false;
        break;

      case LOGIN_SUCCESS:
        draft.login = false;
        break;

      case LOGIN_ERROR:
        draft.error = action.error;
        draft.login = false;
        break;

      case REGISTER:
        draft.register = true;
        draft.error = false;
        break;

      case REGISTER_SUCCESS:
        draft.register = false;
        break;

      case REGISTER_ERROR:
        draft.error = action.error;
        draft.register = false;
        break;

      case RESET_PASSWORD:
        draft.reset = true;
        draft.error = false;
        break;

      case RESET_PASSWORD_SUCCESS:
        draft.reset = false;
        break;

      case RESET_PASSWORD_ERROR:
        draft.error = action.error;
        draft.reset = false;
        break;
    }
  });

export default authPageReducer;
