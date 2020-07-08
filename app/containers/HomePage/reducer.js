/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  FETCH_BEST_PLACE,
  FETCH_BEST_PLACE_SUCCESS,
  FETCH_BEST_PLACE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  bestPlace: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEST_PLACE:
      return state;
    case FETCH_BEST_PLACE_SUCCESS:
      debugger;
      let newBestPlace = state.bestPlace;
      newBestPlace = action.response;
      return { ...state, bestPlace: newBestPlace };
    default:
      return state;
  }
};

export default homeReducer;

// //
// // import produce from 'immer';
// import {
//   FILTER,
//   FILTER_ERROR,
//   FILTER_SUCCESS,
//   FETCH_ROOM_NEXT_PAGE,
//   FETCH_ROOM_NEXT_PAGE_SUCCESS,
//   FETCH_ROOM_NEXT_PAGE_ERROR,
// } from './constants';

// export const initialState = {};
// const searchResultPageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FILTER:
//       return state;
//     case FILTER_SUCCESS:
//       return {
//         ...state,
//         filterResult: action.response,
//       };
//     case FILTER_ERROR:
//       return initialState;
//     case FETCH_ROOM_NEXT_PAGE:
//       return { ...state };
//     case FETCH_ROOM_NEXT_PAGE_SUCCESS:
//       return {
//         ...state,
//         filterResult: {
//           ...state.filterResult,
//           data: [...state.filterResult.data, ...action.response.data],
//         },
//       };
//     default:
//       return state;
//   }
// };
// export default searchResultPageReducer;
