/**
 *
 * Room Booking
 *
 */

import React from 'react';
import Sticky from 'react-sticky-el';
import Price from './price';
import Host from './host';
import isEmpty from 'lodash/isEmpty';
import Book from './book';

function RoomBooking(props) {
  const { detail } = { ...props };

  return (
    <Sticky stickyClassName="booking-sticky">
      <section id="diamond-booking">
        <div className="booking-wrapper">
          {(isEmpty(detail)) ? '' : <Price detail={detail} />}
          <Book detail={detail} />
        </div>
        <div className="ant-divider" />
        <div className="booking-wrapper">
          <Host host={detail} />
        </div>
      </section>
    </Sticky>
  );
}

export default RoomBooking;
