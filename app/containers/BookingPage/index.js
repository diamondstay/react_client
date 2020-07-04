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
import { Container, Row, Col } from 'react-bootstrap';
import BookingInfo from 'components/BookingInfo';
import BookingUser from 'components/BookingUser';

export function BookingPage() {
  useInjectReducer({ key: 'bookingPage', reducer });
  useInjectSaga({ key: 'bookingPage', saga });

  return (
    <article className="content">
      <Helmet>
        <title>Checkout | Booking</title>
      </Helmet>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <BookingInfo />
            <div className="gap-50" />
            <BookingUser />
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
