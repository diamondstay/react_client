import {
  DEFAULT_ACTION,
  SEARCH_LOCATION_FAIL,
  SEARCH_LOCATION,
  SEARCH_LOCATION_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function searchLocation(query) {
  debugger;
  console.log('LAN 1', query);
  return {
    type: SEARCH_LOCATION,
    query,
  };
}

export function searchLocationSuccess(response) {
  debugger;
  console.log('lan 5', response);
  return {
    type: SEARCH_LOCATION_SUCCESS,
    response: response.data,
  };
}

export function searchLocationError() {
  return {
    type: SEARCH_LOCATION_FAIL,
  };
}
