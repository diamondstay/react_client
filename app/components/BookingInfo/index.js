/**
 *
 * Booking Info
 *
 */

import React from 'react';
import reactLocalStorage from 'utils/localStorage';
import { Row, Col } from 'react-bootstrap';

function BookingInfo() {
  const bookingInfo = reactLocalStorage.getObject('booking-info');

  return (
    <section id="diamond-booking-info">
      <h2 className="page-title">Thông tin đặt chỗ</h2>

      <div className="info-wrapper">
        <Row>
          <Col xs={6}>
            <div className="info-item">
              <div className="item-title">Số đêm</div>
              <div className="item-value">{bookingInfo.days}</div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="info-item">
              <div className="item-title">Số khách</div>
              <div className="item-value">{bookingInfo.adult + ' người lớn' + ( bookingInfo.child > 0 ? ' - ' + bookingInfo.child + ' trẻ em' : '' )}</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="info-wrapper">
        <Row>
          <Col xs={6}>
            <div className="info-item">
              <div className="item-title">Nhận phòng</div>
              <div className="item-value">{bookingInfo.check_in}</div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="info-item">
              <div className="item-title">Trả phòng</div>
              <div className="item-value">{bookingInfo.check_out}</div>
            </div>
          </Col>
        </Row>
      </div>

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