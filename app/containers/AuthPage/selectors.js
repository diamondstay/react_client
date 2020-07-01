import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authPage state domain
 */

const selectAuthPageDomain = state => state.authPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectLogin = () =>
  createSelector(
    selectAuthPageDomain,
    globalState => globalState.login,
  );

const makeSelectRegister = () =>
  createSelector(
    selectAuthPageDomain,
    globalState => globalState.register,
  );

const makeSelectResetPassword = () =>
  createSelector(
    selectAuthPageDomain,
    globalState => globalState.reset,
  );

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () =>
  createSelector(
    selectAuthPageDomain,
    substate => substate,
  );

export default makeSelectAuthPage;
export { selectAuthPageDomain, makeSelectLogin, makeSelectRegister, makeSelectResetPassword };
