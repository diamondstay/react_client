/*
 *
 * SearchResultPage reducer
 *
 */
import produce from 'immer';
import { FILTER, FILTER_ERROR, FILTER_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const searchResultPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FILTER:
        draft.filterResult = initialState;
        break;

      case FILTER_SUCCESS:
        // debugger;
        // console.log('lan 6', action);
        draft.filterResult = action.response;
        break;

      case FILTER_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default searchResultPageReducer;
