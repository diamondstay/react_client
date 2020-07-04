/**
 *
 * Booking User
 *
 */

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function BookingUser() {

  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <section id="diamond-booking-user">
      <h2 className="page-title">Thông tin của bạn</h2>

      <Form className="user-form">
        <Form.Group controlId="formName">
          <Form.Label>Tên Khách hàng <span>*</span></Form.Label>
          <p>Họ tên trên CMND/ Thẻ căn cước</p>
          <Form.Control type="text" name="name" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập"
                        })} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Số điện thoại <span>*</span></Form.Label>
            <p>Mã điện thoại quốc gia</p>
            <Form.Control type="text" name="phone" placeholder=""
                          ref={register({
                            required: "Vui lòng nhập",
                            pattern: {
                              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                              message: "Số điện thoại sai"
                            }
                          })} />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </Form.Group>

          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email <span>*</span></Form.Label>
            <p>VD: email@example.com</p>
            <Form.Control type="email" name="email" placeholder=""
                          ref={register({
                            required: "Vui lòng nhập",
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: "Địa chỉ email sai"
                            }
                          })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </Form.Group>
        </Form.Row>
      </Form>
    </section>
  );
}

export default BookingUser;
