import React, { useEffect, memo } from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSearchResultPage, { makeSelectFilter } from './selectors';

import reducer from './reducer';
import saga from './saga';
import './index.scss';

import ItemFilters from '../../components/ItemFilters/index';
import Room from '../../components/Room/index';
import { filter } from './actions';

function SearchResultPage(props) {
  const { location, filterResult } = props;
  console.log(filterResult);
  useInjectReducer({ key: 'searchResultPage', reducer });
  useInjectSaga({ key: 'searchResultPage', saga });

  useEffect(() => {
    const param = {};
    param.type = queryString.parse(location.search).type || '';
    param.convenience = queryString.parse(location.search).convenience || '';
    param.guest = queryString.parse(location.search).guest;
    param.province = queryString.parse(location.search).province;
    param.min_price = queryString.parse(location.search).min_price;
    param.max_price = queryString.parse(location.search).max_price;
    param.checkin = queryString.parse(location.search).checkin;
    param.checkout = queryString.parse(location.search).checkout;
    param.limit = queryString.parse(location.search).limit;
    param.page = queryString.parse(location.search).page;
    param.sort_by_price = queryString.parse(location.search).sort_by_price;

    props.onchangeFilter(param);
  }, [location.search]);

  return (
    <Container>
      {/* Filter by */}
      <ItemFilters />
      {/* Phần kết quả - rooms */}
      <div className="list-room">
        <div className="page-title">
          {' '}
          Có {filterResult && filterResult.total_record} homestay phù hợp cho
          bạn
        </div>
        <Row>
          {filterResult && filterResult.data
            ? filterResult.data.map(room => (
                <Room width={20} key={room.id} room={room} />
              ))
            : null}
        </Row>
        {/* Phân trang */}
        <span className="btn-seeMore">Xem thêm</span>
      </div>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  searchResultPage: makeSelectSearchResultPage(),
  filterResult: makeSelectFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onchangeFilter: param => {
      dispatch(filter(param));
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(
  compose(
    withConnect,
    memo,
  )(SearchResultPage),
);
