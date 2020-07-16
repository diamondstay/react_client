/**
 *
 * History Item
 *
 */

import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import defaultImg from 'images/default.jpg';
import { DateTime, Filter, Enum } from 'constants/index';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Popconfirm } from 'antd';

function HistoryItem(props) {
  const { item } = { ...props };

  const getBookingTime = (date) => {
    return moment(date).format(DateTime.SHORT_DATE_1);
  };

  const text = 'Bạn có muốn huỷ phòng?';

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
              <Col xs={12} sm={item.status !== 5 && item.status !== 6 ? 8 : 12}>
                <h3 className="room-name">{item.name}</h3>
                <h4 className="room-type">{item.type}</h4>
              </Col>
              <Col xs={12} sm={item.status !== 5 && item.status !== 6 ? 4 : 0} className="text-right">
                {
                  item.status === 1 ?
                    <Link to={'/checkout/payment/' + item.id} className="btn history-button btn-1">
                      Tiếp tục đặt chỗ
                    </Link> : <></>
                }
                {
                  item.status === 2 || item.status === 4 ?
                    <Link to={'/room/' + item.apartment_id} className="btn history-button btn-2">
                      Đặt lại
                    </Link> : <></>
                }
                {
                  item.status === 3 ?
                    <Popconfirm placement="top" title={text} onConfirm={props.cancelBooking} okText="Đồng ý" cancelText="Huỷ">
                      <Button className="btn history-button btn-3">
                        Huỷ phòng
                      </Button>
                    </Popconfirm>
                     : <></>
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
