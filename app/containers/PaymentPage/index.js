/**
 *
 * PaymentPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPaymentPage, { makeSelectPaymentRequest } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { getPaymentRequest } from './actions';
import BookingDetail from 'components/BookingDetail';
import PaymentMethod from 'components/PaymentMethod';
import axios from 'axios';
import reactLocalStorage from 'utils/localStorage';
import { getHeaders } from 'network/API';
import { AppConfig, Endpoints, Messages } from 'constants/index';
import { toast } from 'react-toastify';

export function PaymentPage({getPaymentRequest, paymentRequest, match}) {
  useInjectReducer({ key: 'paymentPage', reducer });
  useInjectSaga({ key: 'paymentPage', saga });

  const bookingId = match.params.id;
  const userAccount = reactLocalStorage.getObject('user-account');

  const handleSubmit = () => {
    // getPaymentRequest(bookingId);
    axios.post(AppConfig.API_BASE_URL + `${Endpoints.PAYMENT_URL}?id=${bookingId}&pay-method=vnp`, {}, getHeaders(userAccount))
      .then(response => {
        const resp = response.data;
        if (resp.code === 200) {
          // toast(Messages.paySuccess);
          window.open(resp.data, "_blank");
        } else {
          toast(resp.message);
        }
      });
  };

  return (
    <article id="diamond-payment-page" className="content">
      <Helmet>
        <title>Checkout | Payment</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <h2 className="page-title">Thanh toán</h2>
            <p>Vui lòng lựa chọn phương thức thanh toán</p>

            <div className="payment-method">
              <PaymentMethod />

              <div className="form-submit">
                <button className="btn submit-button" onClick={handleSubmit}>Thanh toán</button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <h2 className="page-title">Chi tiết đặt phòng</h2>
            <BookingDetail />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

PaymentPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getPaymentRequest: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  paymentPage: makeSelectPaymentPage(),
  paymentRequest: makeSelectPaymentRequest()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getPaymentRequest: (id) => {
      dispatch(getPaymentRequest(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PaymentPage);
