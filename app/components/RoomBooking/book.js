/**
 *
 * Book
 *
 */

import React, { useEffect, useState } from 'react';
import { DatePicker, InputNumber, Popover } from 'antd';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import reactLocalStorage from 'utils/localStorage';
import { Filter } from 'constants/index';
import { useHistory } from "react-router-dom";

function Book(props) {
  const { detail } = {...props};
  let history = useHistory();

  const maxGuests = detail.capacity_max;
  const price = detail.price_promotion ? detail.price_promotion : detail.price;

  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [days, setDays] = useState(0);

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM / YYYY';

  const getBookTime = (date) => {
    let dateArr = date.split(' / ');
    return dateArr[0] + '-' + dateArr[1] + '-' + dateArr[2];
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    let bookingInfo = {
      check_in: checkinDate,
      check_out: checkoutDate,
      adult: adult,
      child: child,
      days: days
    }
    reactLocalStorage.setObject('booking-info', bookingInfo);

    // Redirect to Checkout page
    history.push('/checkout/booking');
  };

  const changeDate = (date, dateString) => {
    let inDate = getBookTime(dateString[0]);
    let outDate = getBookTime(dateString[1]);
    setCheckinDate(inDate);
    setCheckoutDate(outDate);

    let days = parseInt(dateString[1].slice(0,2)) - parseInt(dateString[0].slice(0,2));
    setDays(days);
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  // const [baby, setBaby] = useState(0);

  const selectAdult = value => {
    setAdult(value);
  };

  const selectChild = value => {
    setChild(value);
  };

  // const selectBaby = value => {
  //   setBaby(value);
  // };

  const getTotalPrice = () => {
    const roomNum = adult > maxGuests ? Math.ceil(adult / maxGuests) : 1;
    const totalPrice = roomNum * days * parseInt(price);
    return Filter.formatVndCurrency(totalPrice);
  }

  const content = (
    <div className="guest-select-number">
      <div className="select-item">
        <Row className="align-items-center">
          <Col xs={6}>
            <h4 className="m-0">Người lớn</h4>
          </Col>
          <Col xs={6}>
            <InputNumber
              min={0}
              max={100}
              defaultValue={0}
              onChange={selectAdult}
            />
          </Col>
        </Row>
      </div>
      <div className="select-item">
        <Row className="align-items-center">
          <Col xs={6}>
            <h4 className="m-0">Trẻ em</h4>
            {/*<h5>Tuổi từ 2–12</h5>*/}
          </Col>
          <Col xs={6}>
            <InputNumber
              min={0}
              max={100}
              defaultValue={0}
              onChange={selectChild}
            />
          </Col>
        </Row>
      </div>
      {/*<div className="select-item">*/}
      {/*  <Row>*/}
      {/*    <Col xs={6}>*/}
      {/*      <h4>Trẻ sơ sinh</h4>*/}
      {/*      <h5>Dưới 2 tuổi</h5>*/}
      {/*    </Col>*/}
      {/*    <Col xs={6}>*/}
      {/*      <InputNumber*/}
      {/*        min={0}*/}
      {/*        max={100}*/}
      {/*        defaultValue={0}*/}
      {/*        onChange={selectBaby}*/}
      {/*      />*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</div>*/}
    </div>
  );

  return (
    <Form className="book-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="book-date">
        <RangePicker format={dateFormat} disabledDate={disabledDate} onChange={changeDate} />
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
              {/*{adult < 1 ? 'Số khách' : `${adult + child + baby} khách`}*/}
              {adult < 1 ? 'Số khách' : adult + ' người lớn' + ( child > 0 ? ' - ' + child + ' trẻ em' : '' )}
            </span>
          </div>
        </Popover>
      </div>
      {days > 0 && adult > 0 ?
        <div className="book-price is-flex">
          <span className="fl-item-50">Giá thuê {days} đêm</span>
          <span className="fl-item-50">{getTotalPrice()}</span>
        </div>
        : <></>
      }
      <button className="btn book-btn" type="submit">
        Đặt ngay
      </button>
    </Form>
  );
}

export default Book;
