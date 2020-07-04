/**
 *
 * Search
 *
 */

import React, { useState, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';
import { search, user } from 'components/Icon';
import { DatePicker, Popover, InputNumber } from 'antd';
import moment from 'moment';

import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import 'moment/locale/vi';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { searchLocation } from './actions';

function Search(props) {
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY-MM-DD';

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    const { keyword } = data;

    props.onSubmit({ keyword });
    e.target.reset(); // reset after form submit
  };

  const [adult, setAdult] = useState(0);
  const [kid, setKid] = useState(0);
  const [baby, setBaby] = useState(0);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [location, setLocation] = useState([]);

  const selectAdult = value => {
    setAdult(value);
  };

  const selectKid = value => {
    setKid(value);
  };

  const selectBaby = value => {
    setBaby(value);
  };
  const changeDate = (date, dateString) => {
    setCheckin(dateString[0]);
    setCheckout(dateString[1]);
  };

  const halderChange = e => {
    // searchLocation(e.target.value);
    setLocation(() => ['Tỉnh Thanh Hóa', 'Tỉnh Bình Thuận', 'TP Hà Nội']);
    if (e.target.value === '') {
      setLocation(() => []);
    }
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
              defaultValue={0}
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
      <div className="select-item">
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
      </div>
    </div>
  );

  return (
    <section id="diamond-search">
      <Form
        className="search-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Row className="no-gutters align-items-center">
          <Col xs={12} md={5}>
            <div className="search-location">
              <Form.Control
                type="text"
                name="keyword"
                placeholder="Tìm kiếm"
                onChange={halderChange}
              />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="search-date">
              <RangePicker
                defaultValue={[
                  moment('2020-07-10', dateFormat),
                  moment('2020-07-10', dateFormat),
                ]}
                format={dateFormat}
                onChange={changeDate}
              />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="search-guest">
              <Popover
                placement="top"
                title=""
                content={content}
                trigger="click"
              >
                <div className="guest-info">
                  <i className="guest-icon">{user}</i>
                  <span className="guest-quality">
                    {adult < 1 ? 'Số khách' : `${adult + kid + baby} khách`}
                  </span>
                </div>
              </Popover>
            </div>
          </Col>
          <Col xs={12} md={1} className="text-right">
            <button
              className="btn search-btn"
              type="submit"
              onClick={() =>
                props.history.push(
                  `/search?${queryString.stringify({
                    convenience:
                      queryString.parse(props.location.search).convenience ||
                      '',
                    type: queryString.parse(props.location.search).type || '',
                    guest:
                      adult + kid + baby !== 0 ? adult + kid + baby : undefined,
                    checkin,
                    checkout,
                    province: queryString.parse(props.location.search).province,
                    min_price: queryString.parse(props.location.search)
                      .min_price,
                    max_price: queryString.parse(props.location.search)
                      .max_price,
                    limit: 10,
                    page: 1,
                    sort_by_price: 'desc',
                  })}`,
                )
              }
            >
              {search}
            </button>
          </Col>
        </Row>
      </Form>
      {/*{location.length > 0 ? (*/}
      {/*  <div className="search-box">*/}
      {/*    <h4 className="title">Kết quả tìm kiếm</h4>*/}
      {/*    <div className="result">*/}
      {/*      {location.map(item => (*/}
      {/*        <span*/}
      {/*          className="item"*/}
      {/*          key={item}*/}
      {/*          onClick={() =>*/}
      {/*            props.history.push(*/}
      {/*              `/search?${queryString.stringify({*/}
      {/*                convenience:*/}
      {/*                  queryString.parse(props.location.search).convenience ||*/}
      {/*                type:*/}
      {/*                type: queryString.parse(props.location.search).type || '',*/}
      {/*                guest:*/}
      {/*                  adult + kid + baby !== 0*/}
      {/*                    ? adult + kid + baby*/}
      {/*                    : undefined,*/}
      {/*                checkin,*/}
      {/*                checkout,*/}
      {/*                province: item,*/}
      {/*                min_price: queryString.parse(props.location.search)*/}
      {/*                  .min_price,*/}
      {/*                max_price: queryString.parse(props.location.search)*/}
      {/*                  .max_price,*/}
      {/*                limit: 10,*/}
      {/*                page: 1,*/}
      {/*                sort_by_price: 'desc',*/}
      {/*              })}`,*/}
      {/*              setLocation(() => []),*/}
      {/*            )*/}
      {/*          }*/}
      {/*        >*/}
      {/*          {item}*/}
      {/*        </span>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onchangeText: query => {
      dispatch(searchLocation(query));
    },
  };
}
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(Search),
);
