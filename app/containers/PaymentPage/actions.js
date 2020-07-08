/*
 *
 * PaymentPage actions
 *
 */

import { DEFAULT_ACTION, GET_PAYMENT_REQUEST, GET_PAYMENT_REQUEST_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPaymentRequest(id){
  return {
    type: GET_PAYMENT_REQUEST,
    id
  };
}

export function getPaymentRequestSuccess(response){
  return {
    type: GET_PAYMENT_REQUEST_SUCCESS,
    response,
  };
}
