/**
 *
 * Hotel Booking
 *
 */

import React, { useState } from 'react';
import Sticky from 'react-sticky-el';
import { Filter, DateTime } from 'constants/index';
import { Col, Form, Row } from 'react-bootstrap';
import moment from 'moment';
import { DatePicker, Popover, InputNumber } from 'antd';
import { useForm } from 'react-hook-form';

function HotelBooking(props) {
  const { promotion } = { ...props };
  const { host } = { ...props };

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM';

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    const { keyword } = data;

    props.onSubmit({ keyword });
    e.target.reset(); // reset after form submit
  };

  const changeDate = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };

  const [adult, setAdult] = useState(1);
  const [kid, setKid] = useState(0);
  const [baby, setBaby] = useState(0);

  const selectAdult = value => {
    setAdult(value);
  };

  const selectKid = value => {
    setKid(value);
  };

  const selectBaby = value => {
    setBaby(value);
  };

  const content = (
    <div className="guest-select-number">
      <div className="select-item">
        <Row>
          <Col xs={6}>
            <h4>Người lớn</h4>
          </Col>
          <Col xs={6}>
            <InputNumber
              min={0}
              max={100}
              defaultValue={1}
              onChange={selectAdult}
            />
          </Col>
        </Row>
      </div>
      <div className="select-item">
        <Row>
          <Col xs={6}>
            <h4>Trẻ em</h4>
            <h5>Tuổi từ 2–12</h5>
          </Col>
          <Col xs={6}>
            <InputNumber
              min={0}
              max={100}
              defaultValue={0}
              onChange={selectKid}
            />
          </Col>
        </Row>
      </div>
      {/* <div className="select-item">
        <Row>
          <Col xs={6}>
            <h4>Trẻ sơ sinh</h4>
            <h5>Dưới 2 tuổi</h5>
          </Col>
          <Col xs={6}>
            <InputNumber
              min={0}
              max={100}
              defaultValue={0}
              onChange={selectBaby}
            />
          </Col>
        </Row>
      </div> */}
    </div>
  );

  const getJoinTime = date => moment(date).format(DateTime.SHORT_DATE_1);

  return (
    <Sticky stickyClassName="booking-sticky">
      <section id="diamond-booking">
        <div className="booking-wrapper">
          <div className="booking-price">
            {promotion.percent > 0 ? (
              <>
                <span className="price">
                  {Filter.formatVndCurrency(promotion.sale_price)}
                </span>
                <span className="one-night">/đêm</span>
                <span className="original-price strike">
                  {Filter.formatVndCurrency(promotion.price)}
                </span>
              </>
            ) : (
              <>
                <span className="price">
                  {Filter.formatVndCurrency(promotion.price)}
                </span>
                <span className="one-night">/đêm</span>
              </>
            )}
          </div>
          <Form className="book-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="book-date">
              <RangePicker format={dateFormat} onChange={changeDate} />
            </div>
            <div className="book-guest">
              <Popover
                placement="top"
                title=""
                content={content}
                trigger="click"
              >
                <div className="guest-info">
                  <span className="guest-quality">
                    {adult < 1 ? 'Số khách' : `${adult + kid + baby} khách`}
                  </span>
                </div>
              </Popover>
            </div>
            <button className="btn book-btn" type="submit">
              Đặt ngay
            </button>
          </Form>
        </div>
        <div className="ant-divider" />
        <div className="booking-wrapper">
          <div className="host-item">
            <div className="host-avatar">
              <img src={host.avatar} alt={host.full_name} />
            </div>
            <div className="host-info">
              <h4 className="host-name">{host.full_name}</h4>
              <h5 className="host-time">
                Tham gia {getJoinTime(host.created_at)}
              </h5>
            </div>
          </div>
        </div>
      </section>
    </Sticky>
  );
}

export default HotelBooking;
