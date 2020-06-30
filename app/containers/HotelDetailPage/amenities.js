/**
 *
 * Hotel Amenities
 *
 */

import React from 'react';
import { getIcon } from 'components/Icon/function';

function HotelAmenities(props) {

  const { amenities } = {...props};

  return (
    <section id="diamond-amenities">
      <h2 className="page-title">Tiện nghi chỗ ở</h2>
      <p className="mb-4">Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</p>

      {amenities && amenities.map(group => (
        <div className="amenities-item" key={group.id}>
          <h3 className="section-title">{group.name}</h3>
          <ul className="amenities-list">
            {group.amenities && group.amenities.data.map(item => (
              <li key={item.id}>
                <i>{getIcon(item.icon)}</i>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default HotelAmenities;
