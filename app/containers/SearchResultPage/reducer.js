// /*
//  *
//  * SearchResultPage reducer
//  *
//  */
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

// /* eslint-disable default-case, no-param-reassign */
// const searchResultPageReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case FILTER:
//         draft.filterResult = initialState;
//         break;

//       case FILTER_SUCCESS:
//         // debugger;
//         // console.log('lan 6', action);
//         draft.filterResult = action.response;
//         break;

//       case FILTER_ERROR:
//         draft.error = action.error;
//         break;

//       case FETCH_ROOM_NEXT_PAGE:
//         draft.filterResult = { ...state };
//         break;
//       case FETCH_ROOM_NEXT_PAGE_SUCCESS:
//         debugger;
//         console.log(state);
//         console.log(action.response);
//         draft.filterResult = {
//           ...state,
//           filterResult: {
//             filterResult: {
//               filterResult: {
//                 data: [...filterResult,  ...action.response.data],
//               },
//             },
//           },
//         };
//         break;
//     }
//   });

// export default searchResultPageReducer;

/*
 *
 * SearchResultPage reducer
 *
 */
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

/* eslint-disable default-case, no-param-reassign */
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
