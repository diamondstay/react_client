/*
 *
 * HistoryPage actions
 *
 */

import { DEFAULT_ACTION, GET_HISTORY_LIST, GET_HISTORY_LIST_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getHistoryList(status, fromMonth, toMonth, page, limit){
  return {
    type: GET_HISTORY_LIST,
    status, fromMonth, toMonth, page, limit
  };
}

export function getHistoryListSuccess(response){
  return {
    type: GET_HISTORY_LIST_SUCCESS,
    response,
  };
}
