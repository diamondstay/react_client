/**
 *
 * Booking Coupon
 *
 */

import React from 'react';
import { useFormContext } from "react-hook-form";
import { Col, Form } from 'react-bootstrap';
import reactLocalStorage from 'utils/localStorage';

function BookingCoupon() {
  const { register } = useFormContext(); // retrieve all hook methods
  const bookingInfo = reactLocalStorage.getObject('booking-info');

  return (
    <section id="diamond-booking-additional">
      <h2 className="page-title">Mã khuyến mại</h2>

      <div className="coupon-form">
        <Form.Group controlId="formCoupon">
          <Form.Control type="text" name="coupon" defaultValue={bookingInfo.coupon.coupon}  ref={register} />
        </Form.Group>
      </div>
    </section>
  );
}

export default BookingCoupon;
