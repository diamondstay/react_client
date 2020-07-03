/*
 *
 * RoomPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_ROOM_DETAIL, GET_ROOM_DETAIL_SUCCESS } from './constants';

export const initialState = {
  loadingRoom: false,
  room: [],
};

/* eslint-disable default-case, no-param-reassign */
const roomPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case GET_ROOM_DETAIL:
        draft.loadingRoom = true;
        break;
      case GET_ROOM_DETAIL_SUCCESS:
        draft.room = action.response;
        draft.loadingRoom = false;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default roomPageReducer;
