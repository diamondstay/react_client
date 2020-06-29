/**
 *
 * Hotel Facilities
 *
 */

import React from 'react';
import { wifi, tv, airConditioner, shampoo, towel, toothpaste, soap, dryer,
  electricStove, microwave, fridge, bbq, swimmingPool} from 'components/Icon';

function HotelFacilities() {

  return (
    <section id="diamond-facilities">
      <h2 className="page-title">Tiện nghi chỗ ở</h2>
      <p className="mb-4">Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</p>

      <div className="facilities-item">
        <h3 className="section-title">Tiện ích</h3>
        <ul className="facilities-list">
          <li>
            <i>{wifi}</i>
            <span>Wifi</span>
          </li>
          <li>
            <i>{tv}</i>
            <span>TV</span>
          </li>
          <li>
            <i>{airConditioner}</i>
            <span>Điều hoà</span>
          </li>
          <li>
            <i>{shampoo}</i>
            <span>Dầu gội, dầu xả</span>
          </li>
          <li>
            <i>{towel}</i>
            <span>Towel</span>
          </li>
          <li>
            <i>{toothpaste}</i>
            <span>Kem đánh răng</span>
          </li>
          <li>
            <i>{soap}</i>
            <span>Xà phòng tắm</span>
          </li>
          <li>
            <i>{dryer}</i>
            <span>Máy sấy</span>
          </li>
        </ul>
      </div>

      <div className="facilities-item">
        <h3 className="section-title">Tiện ích bếp</h3>
        <ul className="facilities-list">
          <li>
            <i>{electricStove}</i>
            <span>Bếp điện</span>
          </li>
          <li>
            <i>{microwave}</i>
            <span>Lò vi sóng</span>
          </li>
          <li>
            <i>{fridge}</i>
            <span>Tủ lạnh</span>
          </li>
        </ul>
      </div>

      <div className="facilities-item">
        <h3 className="section-title">Tiện ích giải trí</h3>
        <ul className="facilities-list">
          <li>
            <i>{bbq}</i>
            <span>BBQ</span>
          </li>
          <li>
            <i>{swimmingPool}</i>
            <span>Bể bơi cá nhân</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HotelFacilities;
