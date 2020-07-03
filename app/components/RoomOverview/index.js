/**
 *
 * Hotel Overview
 *
 */

import React from 'react';
import { mapMarker, building } from 'components/Icon';

function RoomOverview(props) {

  const { detail } = {...props};

  return (
    <section id="diamond-general">
      <h2 className="hotel-name">{detail.name}</h2>
      <ul className="hotel-info">
        <li>
          <i>{mapMarker}</i> <span>{detail.detail_address}, {detail.village_address}, {detail.district_address}, {detail.province_address}</span>
        </li>
        <li>
          <i>{building}</i> <span><strong>{detail.apartment_type}</strong> <span className="bullet" /> {detail.area}m<sup>2</sup></span>
        </li>
      </ul>
      <div className="hotel-overview mb-3">
        <span>{detail.amount_bathroom}</span> phòng tắm <span className="bullet" />
        <span>{detail.amount_bed}</span> giường <span className="bullet" />
        <span>{detail.amount_bedroom}</span> phòng ngủ <span className="bullet" />
        <span>{detail.capacity_standard}</span> khách (tối đa {detail.capacity_max} khách)
      </div>
      <div className="hotel-description" dangerouslySetInnerHTML={{__html: detail.description}} />
    </section>
  );
}

export default RoomOverview;
