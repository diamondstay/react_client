import produce from 'immer';
import {
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAIL,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const searchLoactionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_LOCATION:
        draft.searchLocation = initialState;
        break;

      case SEARCH_LOCATION_SUCCESS:
        debugger;
        console.log('lan 6', action);
        draft.searchLocation = action.response;
        break;

      case SEARCH_LOCATION_FAIL:
        draft.error = action.error;
        break;
    }
  });

export default searchLoactionReducer;
