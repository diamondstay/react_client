/**
 *
 * HistoryPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHistoryPage, { makeSelectHistoryList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getHistoryList } from './actions';
import { Helmet } from 'react-helmet';
import HistoryItem from 'components/HistoryItem';
import { Container, Row, Col } from 'react-bootstrap';
import { DatePicker, Select } from 'antd';
import moment from 'moment';
import axios from 'axios';
import reactLocalStorage from 'utils/localStorage';
import { getHeaders } from 'network/API';
import { AppConfig, Endpoints, Messages } from 'constants/index';
import { toast } from 'react-toastify';

export function HistoryPage({ getHistoryList, historyList }) {
  useInjectReducer({ key: 'historyPage', reducer });
  useInjectSaga({ key: 'historyPage', saga });

  let page = 1;

  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState(0);
  const [fromMonth, setFromMonth] = useState('2020-06-01');
  const [toMonth, setToMonth] = useState('2020-07-30');

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM / YYYY';

  const { Option } = Select;
  const statusData = ['Tất cả', 'Chờ thanh toán', 'Hết hạn', 'Đã thanh toán', 'Đã hủy', 'Đợi xác nhận thông tin', 'Hoàn thành'];

  const userAccount = reactLocalStorage.getObject('user-account');

  useEffect(() => {
    getHistoryList(status, fromMonth, toMonth, page, limit);
  }, [status, fromMonth, toMonth, limit]);

  const getBookTime = date => {
    let dateArr = date.split(' / ');
    return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
  };

  const changeDate = (date, dateString) => {
    let inDate = getBookTime(dateString[0]);
    let outDate = getBookTime(dateString[1]);
    setFromMonth(inDate);
    setToMonth(outDate);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const showMore = () => {
    setLimit(limit + 10);
  };

  const cancelBooking = (bookingId) => {
    axios.post(AppConfig.API_BASE_URL + `${Endpoints.CANCEL_BOOKING_URL}?bid=${bookingId}`, {}, getHeaders(userAccount))
      .then(response => {
        const resp = response.data;
        if (resp.code === 200) {
          toast(Messages.cancelSuccess);
          getHistoryList(status, fromMonth, toMonth, page, limit);
        } else {
          toast(resp.message);
        }
      });
  };

  return (
    <article id="diamond-history-page" className="content">
      <Helmet>
        <title>History</title>
      </Helmet>

      <Container>
        <div className="history-filter">
          <Row>
            <Col xs={12} sm={3} md={2}>
              <Select defaultValue={statusData[0]}
                      onChange={handleStatusChange}>
                {statusData.map((status, index) => (
                  <Option key={index}>{status}</Option>
                ))}
              </Select>
            </Col>
            <Col xs={12} sm={5} md={4}>
              <RangePicker format={dateFormat}
                           defaultValue={[
                             moment('01 / 06 / 2020', dateFormat),
                             moment('30 / 07 / 2020', dateFormat),
                           ]}
                           onChange={changeDate} />
            </Col>
          </Row>
        </div>
        <div className="history-wrapper">
          { historyList.data && historyList.data.map((item, index) => (
            <HistoryItem item={item} key={index} cancelBooking={() => cancelBooking(item.id)} />
          ))}
        </div>
        <div className="history-read-more text-center m-3">
          {
            historyList.length > page ?
              <span className="read-more" onClick={showMore}>
                Xem thêm
              </span> : <></>
          }
        </div>
      </Container>
    </article>
  );
}

HistoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getHistoryList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  historyPage: makeSelectHistoryPage(),
  historyList: makeSelectHistoryList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getHistoryList: (status, fromMonth, toMonth, page, limit) => {
      dispatch(getHistoryList(status, fromMonth, toMonth, page, limit));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HistoryPage);
