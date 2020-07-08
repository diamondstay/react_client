/**
 *
 * Room Booking
 *
 */

import React from 'react';
import reactLocalStorage from 'utils/localStorage';
import Sticky from 'react-sticky-el';
import { mapMarker, calendarAlt, user } from 'components/Icon';
import { Filter } from 'constants/index';

function BookingDetail() {
  const bookingInfo = reactLocalStorage.getObject('booking-info');

  return (
    <Sticky stickyClassName="booking-sticky">
      <section id="diamond-booking" className="mt-4">
        <div className="booking-wrapper">
          <h2 className="booking-room-name">{bookingInfo.name}</h2>
          <ul className="booking-info">
            <li>
              <i>{mapMarker}</i>
              <span>{bookingInfo.addr}, {bookingInfo.village}, {bookingInfo.district}, {bookingInfo.province}</span>
            </li>
          </ul>
          <div className="ant-divider" />
          <ul className="booking-info">
            <li>
              <i>{calendarAlt}</i>
              <span>{bookingInfo.days} đêm <span className="bullet" /> {bookingInfo.start_date} - {bookingInfo.end_date} </span>
            </li>
            <li>
              <i>{user}</i>
              <span>{bookingInfo.adult} người lớn - {bookingInfo.child} trẻ em </span>
            </li>
          </ul>
          <div className="ant-divider" />
          <div className="price-wrapper">
            <div className="book-price is-flex">
              <span className="fl-item-50">Giá thuê {bookingInfo.days} đêm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(bookingInfo.raw_price)}</span>
            </div>
            <div className="book-price is-flex">
              <span className="fl-item-50">Mã khuyến mại</span>
              <span className="fl-item-50">-{Filter.formatVndCurrency(bookingInfo.discount_price)}</span>
            </div>
            <div className="ant-divider" />
            <div className="book-price is-flex">
              <span className="fl-item-50">Tổng tiền</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(bookingInfo.total_price)}</span>
            </div>
          </div>
        </div>
      </section>
    </Sticky>
  );
}

export default BookingDetail;
