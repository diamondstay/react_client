import React from 'react';
import { Col } from 'react-bootstrap';

export default function Room(props) {
  const { width, room } = props;
  return (
    <Col
      style={{
        maxWidth: `${width}%`,
        boxSizing: 'border-box',
        flexBasis: `${width}%`,
      }}
    >
      <div className="room">
        <img
          src={
            room.thumb != ''
              ? room.thumb
              : 'https://cdn.luxstay.com/users/65304/14xSakQMLqxXcVmtXs3sbzEJ.jpg'
          }
          alt={room.name}
        />
        <h1 className="room__name">
          {room.name} - {room.type}
        </h1>
        <span className="room__info">
          {room.capacity_max} khách · {room.amount_bedroom} phòng ngủ ·{' '}
          {room.amount_bed}
          phòng tắm
        </span>
        <div className="room__price">
          <span className="discount">{room.price_promotion}₫/đêm </span>
          <span className="origin">{room.price}₫</span>
        </div>
        <div className="room__address">
          {room.province}, {room.village}, Vietnam
        </div>
      </div>
    </Col>
  );
}
