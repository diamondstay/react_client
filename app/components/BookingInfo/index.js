/**
 *
 * Booking Info
 *
 */

import React from 'react';
import reactLocalStorage from 'utils/localStorage';
import { Row, Col, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

function BookingInfo() {
  const bookingInfo = reactLocalStorage.getObject('booking-info');
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <section id="diamond-booking-info">
      <h2 className="page-title">Thông tin đặt chỗ</h2>

      <div className="info-form">
        <Form.Row>
          <Form.Group as={Col} xs={12} sm={4} controlId="formDays">
            <Form.Label>Số đêm</Form.Label>
            <Form.Control type="text" name="days" defaultValue={bookingInfo.days} disabled />
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={8} controlId="formCustomerEmail">
            <Form.Label>Số khách</Form.Label>
            <Row className="form-row">
              <Col>
                <div className="input-group">
                  <Form.Control type="email" name="adult" ref={register} disabled />
                  <span>người lớn</span>
                </div>
              </Col>
              <Col>
                <div className="input-group">
                  <Form.Control type="email" name="child" ref={register} disabled />
                  <span>trẻ em</span>
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formDays">
            <Form.Label>Nhận phòng</Form.Label>
            <Form.Control type="text" name="start_date" ref={register} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerEmail">
            <Form.Label>Trả phòng</Form.Label>
            <Form.Control type="text" name="end_date" ref={register} disabled />
          </Form.Group>
        </Form.Row>

        <Form.Row className="d-none">
          <Form.Group as={Col} controlId="formDays">
            <Form.Label>Nhận phòng</Form.Label>
            <Form.Control type="text" name="check_in" ref={register} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formCustomerEmail">
            <Form.Label>Trả phòng</Form.Label>
            <Form.Control type="text" name="check_out" ref={register} disabled />
          </Form.Group>
        </Form.Row>
      </div>

      <div className="gap-30" />

      <div className="info-item">
        <div className="item-title">Trách nhiệm vật chất</div>
        <div className="item-text">Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu trú.</div>
      </div>

      <div className="info-item">
        <div className="item-title">Nội quy chỗ ở</div>
        <div className="item-text">
          <p>Yêu cầu chứng minh thư/ căn cước công dân/ hộ chiếu hoặc đặt cọc tại chỗ nghỉ</p>
        </div>
      </div>
    </section>
  );
}

export default BookingInfo;
