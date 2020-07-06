/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/AuthPage/login';
import RegisterPage from 'containers/AuthPage/register';
import ThankYouPage from 'containers/AuthPage/thank-you';
import HotelDetailPage from 'containers/HotelDetailPage/Loadable';
import RoomPage from 'containers/RoomPage/Loadable';
import BookingPage from 'containers/BookingPage/Loadable';
import PaymentPage from 'containers/PaymentPage/Loadable';
import SearchResultPage from 'containers/SearchResultPage/Loadable';
import HostPage from 'containers/HostPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Header1 from 'components/Header/header_1';
import Header2 from 'components/Header/header_2';
import Footer from 'components/Footer';
import Alert from 'components/Alert';
import { useInjectReducer } from 'utils/injectReducer';
import 'styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faFax,
  faPaperPlane,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faVimeo,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

import { makeSelectAlert } from './selectors';
import reducer from './reducer';

library.add(
  faHome,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faFax,
  faPaperPlane,
  faHeart,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faVimeo,
  faSoundcloud,
);

const AppWrapper = styled.div``;
const key = 'app';

function App({ alerts }) {
  useInjectReducer({ key, reducer });

  const GeneralLayout = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <Header />
          <Component {...matchProps} />
          <Footer />
        </>
      )}
    />
  );

  const HotelLayout = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <Header1 />
          <Component {...matchProps} />
        </>
      )}
    />
  );

  const AuthLayout = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <Header2 />
          <Component {...matchProps} />
        </>
      )}
    />
  );

  const alertsProps = {
    alerts,
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Diamond Stay" defaultTitle="Diamond Stay">
        <meta name="description" content="Diamond Stay" />
      </Helmet>
      <Alert {...alertsProps} />
      <Switch>
        <GeneralLayout exact path="/" component={HomePage} />
        <AuthLayout exact path="/login" component={LoginPage} />
        <AuthLayout exact path="/register" component={RegisterPage} />
        <AuthLayout exact path="/thank-you" component={ThankYouPage} />
        <HotelLayout exact path="/hotel/:hotelId" component={HotelDetailPage} />
        <HotelLayout exact path="/room/:roomId" component={RoomPage} />
        <HotelLayout exact path="/checkout/booking" component={BookingPage} />
        <HotelLayout exact path="/checkout/payment" component={PaymentPage} />

        <GeneralLayout path="/search" component={SearchResultPage} exact />
        <GeneralLayout path="/host/:id" component={HostPage} exact />

        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/location/:slug.:id" component={LocationPage} exact /> */}
        {/* <Route path="/search-result" component={LocationPage} exact /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

App.propTypes = {
  alerts: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  alerts: makeSelectAlert(),
});

export function mapDispatchToProps(dispatch) {
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
)(App);
