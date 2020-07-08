/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectFetchBestPlace,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername, fetchBestPlace } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Welcome from 'components/Welcome';
import BestPlaces from 'components/BestPlaces';
import BookVilla from 'components/BookVilla';
import SaiGon from 'components/Location/SaiGon';
import VungTau from 'components/Location/VungTau';
import HaNoi from 'components/Location/HaNoi';
import DaLat from 'components/Location/DaLat';
import MienTrung from 'components/Location/MienTrung';
import Vinhomes from 'components/Location/Vinhomes';
import Intro from 'components/Intro';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { home } = props;

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
    props.fetchBestPlace();
  }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };
  console.log(',,,,', home);
  return (
    <article id="home-page">
      <Welcome />
      {home ? (
        <React.Fragment>
          {home.bestPlace.length > 0 ? (
            <BestPlaces bestPlaces={home.bestPlace} />
          ) : null}
        </React.Fragment>
      ) : null}

      <BookVilla />
      <SaiGon />
      <VungTau />
      <HaNoi />
      <DaLat />
      <MienTrung />
      <Vinhomes />
      <Intro />
    </article>
  );
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
//   // repos: makeSelectRepos(),
//   // username: makeSelectUsername(),
//   // loading: makeSelectLoading(),
//   // error: makeSelectError(),
//   x: makeSelectFetchBestPlace(),
// });

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};
export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
    fetchBestPlace: () => {
      dispatch(fetchBestPlace());
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
)(HomePage);
