/*
 *
 * Hotel Detail
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { hotelDetail } from './data';
import HotelGallery from 'components/Carousel/hotel-gallery';
import { Container, Row, Col } from 'react-bootstrap';
import HotelGeneral from './general';
import HotelFacilities from './facilities';

export default function HotelDetail( {match} ) {

  let hotelId = match.params.hotelId;

  console.log(hotelId);

  return (
    <div>
      <Helmet>
        <title>Hotel</title>
      </Helmet>

      <HotelGallery media={hotelDetail.media} />

      <Container className="container-origin">
        <Row>
          <Col xs={12} md={8}>
            <div className="gap-50" />
            <HotelGeneral detail={hotelDetail} />
            <div className="gap-50" />
            <HotelFacilities />
            <div className="gap-50" />
          </Col>
          <Col xs={12} md={4}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
