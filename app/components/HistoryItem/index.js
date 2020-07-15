/**
 *
 * History Item
 *
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import defaultImg from 'images/default.jpg';
import { DateTime, Filter, Enum } from 'constants/index';
import moment from 'moment';
import { Link } from 'react-router-dom';

function HistoryItem(props) {
  const { item } = { ...props };

  const getBookingTime = (date) => {
    return moment(date).format(DateTime.SHORT_DATE_1);
  };

  return (
    <section className="history-item">
      <Row>
        <Col xs={4}>
          <figure className="item-image">
            <img src={item.thumb ? item.thumb : defaultImg} alt={item.name} />
            <figcaption className="booking-status">
              <span>{Enum.BookingStatus[item.status]}</span>
            </figcaption>
          </figure>
        </Col>
        <Col xs={8}>
          <div className="item-info">
            <Row>
              <Col xs={12} sm={8}>
                <h3 className="room-name">{item.name}</h3>
                <h4 className="room-type">{item.type}</h4>
              </Col>
              <Col xs={12} sm={4} className="text-right">
                {
                  item.status === 1 ?
                    <Link to={'/room/' + item.apartment_id} className="btn history-button">
                      Tiếp tục đặt chỗ
                    </Link> : <></>
                }
              </Col>
            </Row>
          </div>
          <div className="ant-divider" />
          <div className="item-detail">
            <Row>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Mã đặt chỗ</div>
                  <div className="value">{item.code}</div>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Số khách</div>
                  <div className="value">{item.guest}</div>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Ngày đến</div>
                  <div className="value">{getBookingTime(item.check_in)}</div>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Số đêm</div>
                  <div className="value">{item.days}</div>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Tổng tiền</div>
                  <div className="value">{Filter.formatPrice(item.total)}</div>
                </div>
              </Col>
              <Col xs={6} sm={4}>
                <div className="detail-item">
                  <div className="label">Ngày đi</div>
                  <div className="value">{getBookingTime(item.check_out)}</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default HistoryItem;
