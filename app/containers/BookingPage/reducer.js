/*
 *
 * BookingPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SUBMIT_BOOKING, SUBMIT_BOOKING_SUCCESS } from './constants';

export const initialState = {
  error: null,
  loading: false,
  success: false
};

/* eslint-disable default-case, no-param-reassign */
const bookingPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SUBMIT_BOOKING:
        return {...state, ...{ loading: true, error: null }};
      case SUBMIT_BOOKING_SUCCESS:
        return {...state, loading: false, success: true };
      default: return state;
    }
  });

export default bookingPageReducer;
