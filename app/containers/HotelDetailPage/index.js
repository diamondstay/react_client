/*
 *
 * Hotel Detail
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { hotelDetail, reviews, settings, chart, places, similarList, otherList, promotion } from './data';
import { Container, Row, Col } from 'react-bootstrap';
import { find } from 'lodash';
import HotelGallery from './gallery';
import HotelGeneral from './general';
import HotelAmenities from './amenities';
import HotelRoomRate from './room-rate';
import HotelReview from './review';
import HotelPolicy from './policy';
import HotelPlaces from './places';
import HotelSimilarList from './similar-list';
import HotelOtherList from './other-list';
import HotelBooking from './booking';

export default function HotelDetail( {match} ) {

  let hotelId = match.params.hotelId;

  const policyType = hotelDetail.cancellation_policy;
  const policy = find(settings.cancellation_policies, { 'id': policyType });

  return (
    <div>
      <Helmet>
        <title>Hotel</title>
      </Helmet>

      <HotelGallery media={hotelDetail.photos.data} />

      <Container className="container-origin">
        <Row>
          <Col xs={12} md={8}>
            <div className="gap-50" />
            <HotelGeneral detail={hotelDetail} />
            <div className="gap-50" />
            <HotelAmenities amenities={hotelDetail.amenityTypes.data} />
            <div className="gap-50" />
            <HotelRoomRate price={hotelDetail.price.data} />
            <div className="gap-50" />
            <HotelReview reviews={reviews} count={hotelDetail.review_count} />
            <div className="gap-50" />
            <HotelPolicy policy={policy.tip} chart={chart} note={hotelDetail.special_note} time={hotelDetail.price.data} />
            <div className="gap-50" />
            <HotelPlaces places={places} />
          </Col>
          <Col xs={12} md={4}>
            <HotelBooking promotion={promotion} host={hotelDetail.host.data} />
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
    </div>
  );
}
