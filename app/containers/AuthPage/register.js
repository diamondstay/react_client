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
import makeSelectAuthPage, { makeSelectRegister } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AuthTemplate from './template';
import { userRegister } from './actions';

export function AuthPage({onSubmitForm}) {
  useInjectReducer({ key: 'authPage', reducer });
  useInjectSaga({ key: 'authPage', saga });

  return (
    <AuthTemplate type={1} onSubmit={onSubmitForm} />
  );
}

AuthPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  register: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authPage: makeSelectAuthPage(),
  registerSuccess: makeSelectRegister()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (data) => {
      dispatch(userRegister(data));
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
