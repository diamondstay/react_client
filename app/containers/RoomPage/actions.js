/*
 *
 * RoomPage actions
 *
 */

import { DEFAULT_ACTION, GET_ROOM_DETAIL, GET_ROOM_DETAIL_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getRoomDetail(id){
  return {
    type: GET_ROOM_DETAIL,
    id
  };
}

export function getRoomDetailSuccess(response){
  return {
    type: GET_ROOM_DETAIL_SUCCESS,
    response,
  };
}
