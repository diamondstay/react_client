/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  DEFAULT_ACTION,
  FETCH_BEST_PLACE,
  FETCH_BEST_PLACE_ERROR,
  FETCH_BEST_PLACE_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchBestPlace() {
  debugger;
  console.log('LAN 1');
  return {
    type: FETCH_BEST_PLACE,
  };
}

export function fetchBestPlaceSuccess(response) {
  // debugger;
  // console.log('lan 5', response);
  return {
    type: FETCH_BEST_PLACE_SUCCESS,
    response: response.data,
  };
}

export function fetchBestPlaceError() {
  return {
    type: FETCH_BEST_PLACE_ERROR,
  };
}
