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

export function HistoryPage({ getHistoryList, historyList }) {
  useInjectReducer({ key: 'historyPage', reducer });
  useInjectSaga({ key: 'historyPage', saga });

  let status = 1;
  let fromMonth = '2020-06-01';
  let toMonth = '2020-07-30';
  let page = 1;
  let limit = 10;

  useEffect(() => {
    getHistoryList(status, fromMonth, toMonth, page, limit);
  }, []);

  return (
    <article id="diamond-history-page" className="content">
      <Helmet>
        <title>History</title>
      </Helmet>

      <Container>
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
