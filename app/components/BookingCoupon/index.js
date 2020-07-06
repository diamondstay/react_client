/**
 *
 * Booking Coupon
 *
 */

import React from 'react';
import { useFormContext } from "react-hook-form";
import { Col, Form } from 'react-bootstrap';

function BookingCoupon() {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <section id="diamond-booking-additional">
      <h2 className="page-title">Mã khuyến mại</h2>

      <div className="coupon-form">
        <Form.Group controlId="formCoupon">
          <Form.Control type="text" name="coupon" placeholder="Nhập mã khuyến mại" ref={register} />
        </Form.Group>
      </div>
    </section>
  );
}

export default BookingCoupon;
