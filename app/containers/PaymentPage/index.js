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
import makeSelectPaymentPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Helmet } from 'react-helmet';
import { Col, Container, Form, Row } from 'react-bootstrap';

export function PaymentPage() {
  useInjectReducer({ key: 'paymentPage', reducer });
  useInjectSaga({ key: 'paymentPage', saga });

  return (
    <article className="content">
      <Helmet>
        <title>Checkout | Payment</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h2 className="page-title">Thanh toán</h2>
            <p>Vui lòng lựa chọn phương thức thanh toán</p>
          </Col>
          <Col xs={12} sm={{ span: 4, offset: 2 }}>

          </Col>
        </Row>
      </Container>
    </article>
  );
}

PaymentPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  paymentPage: makeSelectPaymentPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
