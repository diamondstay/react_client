/**
 *
 * Search
 *
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';
import { search } from 'components/Icon';
import { DatePicker, Popover, InputNumber } from 'antd';
import moment from 'moment';
import { user } from 'components/Icon';

function Search(props) {

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM';

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    let keyword = data.keyword;

    props.onSubmit({keyword});
    e.target.reset(); // reset after form submit
  };

  const changeDate = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  }

  const [adult, setAdult] = useState(0);
  const [kid, setKid] = useState(0);
  const [baby, setBaby] = useState(0);

  const selectAdult = (value) => {
    setAdult(value);
  };

  const selectKid = (value) => {
    setKid(value);
  };

  const selectBaby = (value) => {
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
            <InputNumber min={0} max={100} defaultValue={0} onChange={selectAdult} />
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
            <InputNumber min={0} max={100} defaultValue={0} onChange={selectKid} />
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
            <InputNumber min={0} max={100} defaultValue={0} onChange={selectBaby} />
          </Col>
        </Row>
      </div>
    </div>
  );

  return (
    <section id="diamond-search">
      <Form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <Row className="no-gutters align-items-center">
          <Col xs={12} md={5}>
            <div className="search-location">
              <Form.Control type="text" name="keyword" placeholder="Tìm kiếm" />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="search-date">
              <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                           format={dateFormat}
                           onChange={changeDate}
              />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="search-guest">
              <Popover placement="top" title="" content={content} trigger="click">
                <div className="guest-info">
                  <i className="guest-icon">
                    {user}
                  </i>
                  <span className="guest-quality">
                    {
                      adult < 1 ? 'Số khách' : adult + kid + baby + ' khách'
                    }
                  </span>
                </div>
              </Popover>
            </div>
          </Col>
          <Col xs={12} md={1} className="text-right">
            <button className="btn search-btn" type="submit">{search}</button>
          </Col>
        </Row>
      </Form>
    </section>
  );
}

export default Search;
