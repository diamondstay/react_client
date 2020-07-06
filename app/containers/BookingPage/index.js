/**
 *
 * BookingPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBookingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useForm, FormProvider } from "react-hook-form";
import BookingInfo from 'components/BookingInfo';
import BookingUser from 'components/BookingUser';
import BookingAdditional from 'components/BookingAdditional';
import BookingCoupon from 'components/BookingCoupon';
import { useHistory } from 'react-router-dom';

export function BookingPage() {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });

  let history = useHistory();

  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
    history.push('/checkout/payment');
  }

  return (
    <article className="content">
      <Helmet>
        <title>Checkout | Booking</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <FormProvider {...methods} >
              <Form onSubmit={methods.handleSubmit(onSubmit)} className="booking-form">
                <BookingInfo />
                <div className="gap-50" />
                <BookingUser />
                <div className="gap-50" />
                <BookingAdditional />
                <div className="gap-50" />
                <BookingCoupon />
                <div className="form-submit">
                  <button className="btn submit-button" type="submit">Thanh toán</button>
                </div>
              </Form>
            </FormProvider>
          </Col>
          <Col xs={12} sm={{ span: 4, offset: 2 }}>

          </Col>
        </Row>
      </Container>
    </article>
  );
}

BookingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookingPage: makeSelectBookingPage(),
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
)(BookingPage);
