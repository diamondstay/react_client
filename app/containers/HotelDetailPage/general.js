/**
 *
 * Hotel General
 *
 */

import React from 'react';
import { mapMarker, building } from 'components/Icon';

function HotelGeneral(props) {

  const { detail } = {...props};

  return (
    <section id="diamond-general">
      <h2 className="hotel-name">{detail.name}</h2>
      <ul className="hotel-info">
        <li>
          <i>{mapMarker}</i> <span>{detail.address.data.city}, {detail.address.data.state}, {detail.address.data.country}</span>
        </li>
        <li>
          <i>{building}</i> <span><strong>{detail.propertyType.data.name}</strong> <span className="bullet" /> {detail.area}m<sup>2</sup></span>
        </li>
      </ul>
      <div className="hotel-overview mb-3">
        <span>{detail.roomType.data.name}</span><span className="bullet" />
        <span>{detail.num_bathrooms}</span> phòng tắm<span className="bullet" />
        <span>{detail.num_beds}</span> giường<span className="bullet" />
        <span>{detail.num_bedrooms}</span> phòng ngủ<span className="bullet" />
        <span>{detail.price.data.standard_guests}</span> khách (tối đa {detail.maximum_guests} khách)
      </div>
      <div className="hotel-description" dangerouslySetInnerHTML={{__html: detail.introduction}} />
    </section>
  );
}

export default HotelGeneral;
