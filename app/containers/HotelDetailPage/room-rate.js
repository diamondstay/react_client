/**
 *
 * Hotel Room Rate
 *
 */

import React from 'react';

function HotelRoomRate(props) {

  const hotelDetail = props.detail;

  return (
    <section id="diamond-room-rate">
      <h2 className="page-title">Giá phòng</h2>
      <p className="mb-4">Giá có thể tăng vào cuối tuần hoặc ngày lễ</p>


    </section>
  );
}

export default HotelRoomRate;
