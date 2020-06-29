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
          <i>{mapMarker}</i> <span>{hotelDetail.location}</span>
        </li>
        <li>
          <i>{building}</i> <span><strong>{hotelDetail.category}</strong> &middot; {hotelDetail.acreage}m<sup>2</sup></span>
        </li>
      </ul>
      <div className="hotel-overview mb-3">
        <span>{hotelDetail.intro.type}</span><span className="bullet" />
        <span>{hotelDetail.intro.bathroom}</span> phòng tắm<span className="bullet" />
        <span>{hotelDetail.intro.bed}</span> giường<span className="bullet" />
        <span>{hotelDetail.intro.bedroom}</span> phòng ngủ<span className="bullet" />
        <span>{hotelDetail.intro.guest}</span> khách {hotelDetail.intro.maxGuest ? '(tối đa ' + hotelDetail.intro.maxGuest + ' khách)' : ''}
      </div>
      <div className="hotel-description" dangerouslySetInnerHTML={{__html: hotelDetail.description}} />
    </section>
  );
}

export default HotelGeneral;
