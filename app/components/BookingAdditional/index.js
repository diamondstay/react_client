/**
 *
 * Booking Additional
 *
 */

import React from 'react';
import { useFormContext } from "react-hook-form";
import { Form } from 'react-bootstrap';

function BookingAdditional() {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <section id="diamond-booking-additional">
      <h2 className="page-title">Thông tin thêm</h2>

      <div className="additional-form">
        <Form.Group controlId="formPurpose">
          <Form.Label>Mục đích của chuyến đi này? <span>*</span></Form.Label>
          <Form.Control as="select" ref={register} name="purpose" defaultValue="Dành cho gia đình">
            <option>Tổ chức tiệc</option>
            <option>Dành cho gia đình</option>
            <option>Công tác</option>
            <option>Khác</option>
          </Form.Control>
        </Form.Group>
      </div>
    </section>
  );
}

export default BookingAdditional;
