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
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppConfig, Endpoints, Messages } from 'constants/index';
import isEmpty from 'lodash/isEmpty';
import { toast } from 'react-toastify';
import { getHeaders } from 'network/API';

function Book(props) {
  const { detail } = { ...props };
  let history = useHistory();
  const roomId = history.location.pathname.match(/\d+/)[0];

  const maxGuests = detail.capacity_max;
  const price = detail.price_promotion ? detail.price_promotion : detail.price;

  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState(0);

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM / YYYY';

  const userAccount = reactLocalStorage.getObject('user-account');

  const getBookTime = date => {
    let dateArr = date.split(' / ');
    return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
  };

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    let bookingInfo = {
      aid: roomId,
      check_in: checkinDate,
      check_out: checkoutDate,
      adult: adult,
      child: child,
      days: days,
      start_date: startDate,
      end_date: endDate,
      raw_price: getRawPrice(),
      discount_price: useCoupon ? getDiscountPrice() : 0,
      total_price: getTotalPrice(),
      coupon: coupon,
      name: detail.name,
      addr: detail.detail_address,
      village: detail.village_address,
      district: detail.district_address,
      province: detail.province_address
    };

    if (isEmpty(userAccount)) {
      toast(Messages.requiredLogin);
    } else {
      if (days < detail.min_day) {
        toast('Thời gian lưu trú tối thiểu phải là ' + detail.min_day + ' đêm.');
      } else {
        reactLocalStorage.setObject('booking-info', bookingInfo);

        // Redirect to Checkout page
        if (checkinDate === checkoutDate) return;
        history.push('/checkout/booking/' + roomId);
      }
    }
  };

  const changeDate = (date, dateString) => {
    let inDate = getBookTime(dateString[0]);
    let outDate = getBookTime(dateString[1]);
    setCheckinDate(inDate);
    setCheckoutDate(outDate);

    setStartDate(dateString[0]);
    setEndDate(dateString[1]);

    let date1 = date[0]._d;
    let date2 = date[1]._d;
    // let gap = date2.getTime() - date1.getTime();
    // let days = gap / (1000 * 3600 * 24);
    let days = moment(date2).diff(moment(date1), 'days');
    if (days < detail.min_day) {
      toast('Thời gian lưu trú tối thiểu phải là ' + detail.min_day + ' đêm.');
    } else {
      setDays(days);
    }
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const selectAdult = value => {
    setAdult(value);
  };

  const selectChild = value => {
    setChild(value);
  };

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    if (detail.price_promotion === 0 || detail.price_promotion === detail.price) {
      axios.get(AppConfig.API_BASE_URL + Endpoints.COUPON_URL, getHeaders(userAccount))
        .then(response => {
          setCoupons(response.data.data);
        });
    }
  }, []);

  const [useCoupon, setUseCoupon] = useState(false);
  const [coupon, setCoupon] = useState('');

  const applyCoupon = (coupon, e) => {
    e.target.className = 'btn btn-sm btn-warning d-none';
    axios.post(AppConfig.API_BASE_URL + `${Endpoints.CHECK_COUPON_URL}?aid=${roomId}&coupon=${coupon}`, {}, getHeaders(userAccount))
      .then(response => {
        const resp = response.data;
        if (resp.code === 200) {
          setUseCoupon(true);
          setCoupon(coupon);
        } else {
          toast(resp.message);
        }
      });
  };

  const getRawPrice = () => {
    let guests = adult + child;
    const roomNum = guests > maxGuests ? Math.ceil(guests / maxGuests) : 1;
    return roomNum * days * parseInt(price);
  };

  const getDiscountPrice = () => {
    const price = getRawPrice();
    const percent = Math.floor(coupon.percent) / 100;
    return price * percent;
  };

  const getSurchargePrice = () => {
    return detail.surcharge_per_person;
  }

  const getTotalPrice = () => {
    if (useCoupon) {
      return getRawPrice() - getDiscountPrice() + getSurchargePrice();
    } else {
      if (adult + child > maxGuests) {
        return getRawPrice() + getSurchargePrice();
      } else {
        return getRawPrice();
      }
    }
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
              defaultValue={1}
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
        <RangePicker
          format={dateFormat}
          disabledDate={disabledDate}
          onChange={changeDate}
        />
      </div>
      <div className="book-guest">
        <Popover placement="top" title="" content={content} trigger="click">
          <div className="guest-info">
            <span className="guest-quality">
              {/*{adult < 1 ? 'Số khách' : `${adult + child + baby} khách`}*/}
              {adult < 1
                ? 'Số khách'
                : adult +
                  ' người lớn' +
                  (child > 0 ? ' - ' + child + ' trẻ em' : '')}
            </span>
          </div>
        </Popover>
      </div>
      {days > 0 && adult > 0 ? (
        <>
          <div className="price-wrapper">
            <div className="book-price is-flex">
              <span className="fl-item-50">Giá thuê {days} đêm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(getRawPrice())}</span>
            </div>
            <div className="book-price is-flex">
              <span className="fl-item-50">Khuyến mại</span>
              <span className="fl-item-50">{useCoupon ? '-' + Filter.formatVndCurrency(getDiscountPrice()) : 0}</span>
            </div>
            <div className="book-price is-flex">
              <span className="fl-item-50">Phụ phí</span>
              <span className="fl-item-50">{adult + child > detail.capacity_standard ? Filter.formatVndCurrency(getSurchargePrice()) : 0}</span>
            </div>
            <div className="ant-divider" />
            <div className="book-price is-flex mb-3">
              <span className="fl-item-50">Tổng tiền</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(getTotalPrice())}</span>
            </div>
          </div>

          {
            detail.price_promotion > 0 && detail.price_promotion !== detail.price ? <></> :
              <ul className="coupon-list">
                {coupons && coupons.map((coupon, index) => (
                  <li className="coupon-item" key={index}>
                    <Row className="no-gutters">
                      <Col xs={8}>
                        <p>Giảm giá <span>{Math.floor(coupon.percent)}%</span></p>
                        <p>&nbsp;-&nbsp;</p>
                        <p>Mã: <span>{coupon.coupon}</span></p>
                      </Col>
                      <Col xs={4} className="text-right">
                        <button className={`btn btn-sm btn-warning ${useCoupon ? 'd-none' : ''}`} type="button"
                                onClick={(e) => applyCoupon(coupon.coupon, e)}>
                          Áp dụng
                        </button>
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
          }
        </>
      ) : (
        <></>
      )}
      <button className="btn book-btn" type="submit">
        Đặt ngay
      </button>
    </Form>
  );
}

export default Book;
