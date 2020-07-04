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
import BookingInfo from 'components/BookingInfo';
import { Container, Row, Col } from 'react-bootstrap';

export function BookingPage() {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });

  return (
    <article>
      <Helmet>
        <title>Checkout | Booking</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <BookingInfo />
          </Col>
          <Col xs={12} sm={4}>

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
