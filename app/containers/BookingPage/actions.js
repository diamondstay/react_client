/*
 *
 * BookingPage actions
 *
 */

import { DEFAULT_ACTION, SUBMIT_BOOKING, SUBMIT_BOOKING_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitBooking(data){
  return {
    type: SUBMIT_BOOKING,
    data
  };
}

export function submitBookingSuccess(response){
  return {
    type: SUBMIT_BOOKING_SUCCESS,
    response
  };
}
