/*
 *
 * PaymentPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_PAYMENT_REQUEST, GET_PAYMENT_REQUEST_SUCCESS } from './constants';

export const initialState = {
  loadingPayment: false,
  payment: [],
};

/* eslint-disable default-case, no-param-reassign */
const paymentPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case GET_PAYMENT_REQUEST:
        draft.loadingPayment = true;
        break;
      case GET_PAYMENT_REQUEST_SUCCESS:
        draft.payment = action.response;
        draft.loadingPayment = false;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default paymentPageReducer;
