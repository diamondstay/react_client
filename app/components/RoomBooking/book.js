/**
 *
 * Book
 *
 */

import React, { useState } from 'react';
import { DatePicker, InputNumber, Popover } from 'antd';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Book(props) {

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

  const [adult, setAdult] = useState(0);
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
  );
}

export default Book;
