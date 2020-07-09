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
import makeSelectAuthPage, { makeSelectResetPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AuthTemplate from './template';
import { resetPassword } from './actions';

export function AuthPage({onSubmitForm}) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  return (
    <AuthTemplate type={3} onSubmit={onSubmitForm} />
  );
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  resetPassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
  resetPasswordSuccess: makeSelectResetPassword()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (data) => {
      dispatch(resetPassword(data));
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
)(AuthPage);
