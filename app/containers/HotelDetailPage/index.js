/*
 *
 * Hotel Detail
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { hotelDetail } from './data';
import HotelGallery from 'components/Carousel/hotel-gallery';

export default function HotelDetail( {match} ) {

  let hotelId = match.params.hotelId;

  console.log(hotelId);

  return (
    <div>
      <Helmet>
        <title>Hotel</title>
      </Helmet>

      <HotelGallery media={hotelDetail.media} />
    </div>
  );
}
