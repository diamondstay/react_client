import {
  DEFAULT_ACTION,
  FILTER,
  FILTER_SUCCESS,
  FILTER_ERROR,
  FETCH_ROOM_NEXT_PAGE,
  FETCH_ROOM_NEXT_PAGE_SUCCESS,
  FETCH_ROOM_NEXT_PAGE_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function filter(param) {
  debugger;
  console.log('LAN 1', param);
  return {
    type: FILTER,
    param,
  };
}

export function filterSuccess(response) {
  // debugger;
  // console.log('lan 5', response);
  return {
    type: FILTER_SUCCESS,
    response: response.data,
  };
}

export function filterError() {
  return {
    type: FILTER_ERROR,
  };
}

export function fetchRoomNextPage(param) {
  debugger;
  console.log(param);
  return {
    type: FETCH_ROOM_NEXT_PAGE,
    param,
  };
}
export function fetchRoomNextPageSucces(response) {
  return {
    type: FETCH_ROOM_NEXT_PAGE_SUCCESS,
    response: response.data,
  };
}
export function fetchRoomNextPageError() {
  return {
    type: FETCH_ROOM_NEXT_PAGE_ERROR,
  };
}
