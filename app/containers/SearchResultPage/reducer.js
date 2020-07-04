//
// import produce from 'immer';
import {
  FILTER,
  FILTER_ERROR,
  FILTER_SUCCESS,
  FETCH_ROOM_NEXT_PAGE,
  FETCH_ROOM_NEXT_PAGE_SUCCESS,
  FETCH_ROOM_NEXT_PAGE_ERROR,
} from './constants';

export const initialState = {};
const searchResultPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return state;
    case FILTER_SUCCESS:
      return {
        ...state,
        filterResult: action.response,
      };
    case FILTER_ERROR:
      return initialState;
    case FETCH_ROOM_NEXT_PAGE:
      return { ...state };
    case FETCH_ROOM_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        filterResult: {
          ...state.filterResult,
          data: [...state.filterResult.data, ...action.response.data],
        },
      };
    default:
      return state;
  }
};
export default searchResultPageReducer;
