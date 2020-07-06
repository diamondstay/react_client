/**
 *
 * Booking User
 *
 */

import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useFormContext } from "react-hook-form";
import { Collapse } from 'reactstrap';

function BookingUser() {
  const { register, errors } = useFormContext(); // retrieve all hook methods

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section id="diamond-booking-user">
      <h2 className="page-title">Thông tin của bạn</h2>

      <div className="user-form">
        <Form.Group controlId="formCustomerName">
          <Form.Label>Tên Khách hàng <span>*</span></Form.Label>
          <p>Họ tên trên CMND/ Thẻ căn cước</p>
          <Form.Control type="text" name="customer_name" placeholder=""
                        ref={register({
                          required: "Vui lòng nhập"
                        })} />
          {errors.name && <p className="error">{errors.customer_name.message}</p>}
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formCustomerPhone">
            <Form.Label>Số điện thoại <span>*</span></Form.Label>
            <p>Mã điện thoại quốc gia</p>
            <Form.Control type="text" name="customer_phone" placeholder=""
                          ref={register({
                            required: "Vui lòng nhập",
                            pattern: {
                              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                              message: "Số điện thoại sai"
                            }
                          })} />
            {errors.phone && <p className="error">{errors.customer_phone.message}</p>}
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerEmail">
            <Form.Label>Email <span>*</span></Form.Label>
            <p>VD: email@example.com</p>
            <Form.Control type="email" name="customer_email" placeholder=""
                          ref={register({
                            required: "Vui lòng nhập",
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: "Địa chỉ email sai"
                            }
                          })} />
            {errors.email && <p className="error">{errors.customer_email.message}</p>}
          </Form.Group>
        </Form.Row>

        <a className={`form-link ${isOpen ? 'check' : 'uncheck'}`} onClick={toggle}>
          <span className="checkbox" />
          <span>Tôi đặt phòng cho người khác</span>
        </a>
        <Collapse isOpen={isOpen}>
          <Form.Group controlId="formOrderName">
            <Form.Label>Tên Khách hàng <span>*</span></Form.Label>
            <p>Họ tên trên CMND/ Thẻ căn cước</p>
            <Form.Control type="text" name="order_name" placeholder=""
                          ref={register()} />
            {errors.name && <p className="error">{errors.order_name.message}</p>}
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formOrderPhone">
              <Form.Label>Số điện thoại <span>*</span></Form.Label>
              <p>Mã điện thoại quốc gia</p>
              <Form.Control type="text" name="order_phone" placeholder=""
                            ref={register()} />
              {errors.phone && <p className="error">{errors.order_phone.message}</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formOrderEmail">
              <Form.Label>Email <span>*</span></Form.Label>
              <p>VD: email@example.com</p>
              <Form.Control type="email" name="order_email" placeholder=""
                            ref={register({
                              pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Địa chỉ email sai"
                              }
                            })} />
              {errors.email && <p className="error">{errors.order_email.message}</p>}
            </Form.Group>
          </Form.Row>
        </Collapse>
      </div>
    </section>
  );
}

export default BookingUser;
