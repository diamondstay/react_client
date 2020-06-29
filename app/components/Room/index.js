import React from 'react';
import { Col } from 'react-bootstrap';

export default function Room(props) {
  const { width } = props;
  return (
    <Col style={{ maxWidth: `${width}%` }}>
      <div className="room">
        <img
          src="https://cdn.luxstay.com/users/349579/B1ua4HgCD21oE7ayhRpFCz33.jpg"
          alt="room"
        />
        <h1 className="room__name">XOÀI XANH - CĂN HỘ MINI</h1>
        <span className="room__info">6 khách · 1 phòng ngủ · 1 phòng tắm</span>
        <div className="room__price">
          <span className="discount">595,000₫/đêm </span>
          <span className="origin">700,000₫</span>
        </div>
        <div className="room__address">Vũng Tàu, Bà Rịa Vũng Tàu, Vietnam</div>
      </div>
    </Col>
  );
}
