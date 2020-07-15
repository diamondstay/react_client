/**
 *
 * HistoryPage
 *
 */

import React, { memo, useEffect } from 'react';
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
import { Container } from 'react-bootstrap';
import moment from 'moment';
import { toast } from 'react-toastify';
import { DatePicker } from 'antd';

export function HistoryPage({ getHistoryList, historyList }) {
  useInjectReducer({ key: 'historyPage', reducer });
  useInjectSaga({ key: 'historyPage', saga });

  let status = '';
  let fromMonth = '2020-06-01';
  let toMonth = '2020-07-30';
  let page = 1;
  let limit = 10;

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD / MM / YYYY';

  useEffect(() => {
    getHistoryList(status, fromMonth, toMonth, page, limit);
  }, []);

  const getBookTime = date => {
    let dateArr = date.split(' / ');
    return dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
  };

  const changeDate = (date, dateString) => {
    let inDate = getBookTime(dateString[0]);
    let outDate = getBookTime(dateString[1]);
    console.log(inDate);
    console.log(outDate);
  };

  return (
    <article id="diamond-history-page" className="content">
      <Helmet>
        <title>History</title>
      </Helmet>

      <Container>
        <div className="history-filter">
          <RangePicker format={dateFormat} onChange={changeDate} />
        </div>
        <div className="history-wrapper">
          { historyList.data && historyList.data.map(item => (
            <HistoryItem item={item} key={item.apartment_id} />
          ))}
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
