/**
 *
 * RoomPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRoomPage, { makeSelectRoomDetail } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getRoomDetail } from './actions';
import { Helmet } from 'react-helmet';
import {
  hotelDetail,
  otherList,
  places,
  promotion,
  reviews,
  similarList,
} from '../HotelDetailPage/data';
import { Col, Container, Row } from 'react-bootstrap';
import { find } from 'lodash';

import HotelAmenities from '../HotelDetailPage/amenities';
import HotelReview from '../HotelDetailPage/review';
import HotelPlaces from '../HotelDetailPage/places';
import HotelBooking from '../HotelDetailPage/booking';
import HotelSimilarList from '../HotelDetailPage/similar-list';
import HotelOtherList from '../HotelDetailPage/other-list';

import RoomGallery from 'components/RoomGallery';
import RoomOverview from 'components/RoomOverview';
import RoomRate from 'components/RoomRate';
import RoomPolicy from 'components/RoomPolicy';
import RoomConveniences from 'components/RoomConveniences';
import RoomBooking from 'components/RoomBooking';

export function RoomPage({getRoomDetail, roomDetail, match}) {
  useInjectReducer({ key: 'roomPage', reducer });
  useInjectSaga({ key: 'roomPage', saga });

  // let roomId = match.params.roomId;

  let id = 7253957655120650;

  useEffect(() => {
    getRoomDetail(id);
  }, []);

  console.log(roomDetail);

  return (
    <article>
      <Helmet>
        <title>Room</title>
      </Helmet>

      <RoomGallery gallery={roomDetail.gallery} />

      <Container className="container-origin">
        <Row>
          <Col xs={12} md={8}>
            <div className="gap-50" />
            <RoomOverview detail={roomDetail} />
            <div className="gap-50" />
            <RoomConveniences conveniences={roomDetail.conveniences} />
            <div className="gap-50" />
            <RoomRate detail={roomDetail}  />
            <div className="gap-50" />
            <HotelReview reviews={reviews} count={hotelDetail.review_count} />
            <div className="gap-50" />
            <RoomPolicy detail={roomDetail} />
            <div className="gap-50" />
            <HotelPlaces places={places} />
          </Col>
          <Col xs={12} md={4}>
            <RoomBooking detail={roomDetail} />
          </Col>
        </Row>
      </Container>

      <div className="full-width-wrapper">
        <Container className="container-origin">
          <div className="gap-50" />
          <HotelSimilarList list={similarList} />
          <div className="gap-50" />
          <HotelOtherList list={otherList} host={hotelDetail.host.data.full_name} />
          <div className="gap-50" />
        </Container>
      </div>
    </article>
  );
}

RoomPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getRoomDetail: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  roomPage: makeSelectRoomPage(),
  roomDetail: makeSelectRoomDetail()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRoomDetail: (id) => {
      dispatch(getRoomDetail(id));
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
)(RoomPage);
