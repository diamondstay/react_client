import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Filter } from 'constants/index';
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
      <NavLink className="room" to={`/room/${room.id}`}>
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
          <span className="discount">
            {Filter.formatVndCurrency(parseInt(room.price_promotion))}/đêm{' '}
          </span>
          <span className="origin">
            {Filter.formatVndCurrency(parseInt(room.price))}
          </span>
        </div>
        <div className="room__address">
          {room.province}, {room.village}, Vietnam
        </div>
      </NavLink>
    </Col>
  );
}
