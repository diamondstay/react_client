/**
 *
 * AuthPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import AuthTemplate from './template';

export function AuthPage() {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  return (
    <AuthTemplate type={2} />
  );
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AuthPage);
