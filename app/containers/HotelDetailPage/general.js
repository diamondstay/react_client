/**
 *
 * Hotel General
 *
 */

import React from 'react';
import { mapMarker, building } from 'components/Icon';

function HotelGeneral(props) {

  const hotelDetail = props.detail;

  return (
    <section id="diamond-general">
      <h2 className="hotel-name">{hotelDetail.name}</h2>
      <ul className="hotel-info">
        <li>
          <i>{mapMarker}</i> <span>{hotelDetail.address.data.city}, {hotelDetail.address.data.state}, {hotelDetail.address.data.country}</span>
        </li>
        <li>
          <i>{building}</i> <span><strong>{hotelDetail.propertyType.data.name}</strong> &middot; {hotelDetail.area}m<sup>2</sup></span>
        </li>
      </ul>
      <div className="hotel-overview mb-3">
        <span>{hotelDetail.roomType.data.name}</span><span className="bullet" />
        <span>{hotelDetail.num_bathrooms}</span> phòng tắm<span className="bullet" />
        <span>{hotelDetail.num_beds}</span> giường<span className="bullet" />
        <span>{hotelDetail.num_bedrooms}</span> phòng ngủ<span className="bullet" />
        <span>{hotelDetail.price.data.standard_guests}</span> khách (tối đa {hotelDetail.maximum_guests} khách)
      </div>
      <div className="hotel-description" dangerouslySetInnerHTML={{__html: hotelDetail.introduction}} />
    </section>
  );
}

export default HotelGeneral;
