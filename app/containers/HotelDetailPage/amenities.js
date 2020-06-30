/**
 *
 * Hotel Amenities
 *
 */

import React from 'react';
import { wifi, tv, airConditioner, shampoo, towel, toothpaste, soap, dryer, toiletPaper, napkins, bottle,
  electricStove, microwave, fridge, bbq, swimmingPool, naturalSurround, beach, balcony, smartTV,
  cradle, noSmoking} from 'components/Icon';

function HotelAmenities(props) {

  const { amenities } = {...props};

  const getIcon = (str) => {
    switch(str) {
      case "lst-icon-hotel-wifi": {
        return wifi;
      }
      case "lst-icon-tv": {
        return tv;
      }
      case "lst-icon-air-conditioning": {
        return airConditioner;
      }
      case "lst-icon-shampoo": {
        return shampoo;
      }
      case "lst-icon-towels": {
        return towel;
      }
      case "lst-icon-uniF12D": {
        return toothpaste;
      }
      case "lst-icon-uniF126": {
        return soap;
      }
      case "lst-icon-hair-dryer": {
        return dryer;
      }
      case "lst-icon-toilet-paper-1": {
        return toiletPaper;
      }
      case "lst-icon-tissues": {
        return napkins;
      }
      case "lst-icon-complimentary-bottled-water": {
        return bottle;
      }
      case "lst-icon-stove-electric": {
        return electricStove;
      }
      case "lst-icon-microwave": {
        return microwave;
      }
      case "lst-icon-refrigerator": {
        return fridge;
      }
      case "lst-icon-bbq-facilities": {
        return bbq;
      }
      case "lst-icon-mountain-view": {
        return naturalSurround;
      }
      case "lst-icon-beach": {
        return beach;
      }
      case "icon_ private_pool": {
        return swimmingPool;
      }
      case "lst-icon-balcony-terrace": {
        return balcony;
      }
      case "lst-icon-smart-tv": {
        return smartTV;
      }
      case "lst-icon-family-room": {
        return cradle;
      }
      case "lst-icon-non-smoking-room": {
        return noSmoking;
      }
      default: {
        console.log("No icons");
        break;
      }
    }
  };

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
