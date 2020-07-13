/*
 *
 * HistoryPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_HISTORY_LIST, GET_HISTORY_LIST_SUCCESS } from './constants';

export const initialState = {
  loadingHistory: false,
  historyList: [],
};

/* eslint-disable default-case, no-param-reassign */
const historyPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_HISTORY_LIST:
        draft.loadingHistory = true;
        break;
      case GET_HISTORY_LIST_SUCCESS:
        draft.loadingHistory = false;
        draft.historyList = action.response;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default historyPageReducer;
