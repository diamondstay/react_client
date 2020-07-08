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
import makeSelectBookingPage, { makeSelectBooking } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useForm, FormProvider } from "react-hook-form";
import BookingInfo from 'components/BookingInfo';
import BookingUser from 'components/BookingUser';
import BookingAdditional from 'components/BookingAdditional';
import BookingCoupon from 'components/BookingCoupon';
import { submitBooking } from './actions';
import reactLocalStorage from 'utils/localStorage';
import BookingDetail from 'components/BookingDetail';

export function BookingPage({onSubmitForm, match}) {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });

  const bookingInfo = reactLocalStorage.getObject('booking-info');

  const methods = useForm({
    defaultValues: {
      check_in: bookingInfo.check_in,
      check_out: bookingInfo.check_out,
      adult: bookingInfo.adult,
      child: bookingInfo.child,
      start_date: bookingInfo.start_date,
      end_date: bookingInfo.end_date,
    }
  });
  const onSubmit = (data) => {
    data.id = match.params.id;
    onSubmitForm(data);
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
            <h2 className="page-title">Chi tiết đặt phòng</h2>
            <BookingDetail />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

BookingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  submitBooking: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  bookingPage: makeSelectBookingPage(),
  bookingSuccess: makeSelectBooking()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (data) => {
      dispatch(submitBooking(data));
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
)(BookingPage);
