/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/AuthPage/login';
import HotelDetailPage from 'containers/HotelDetailPage/Loadable';
import SearchResultPage from 'containers/SearchResultPage/Loadable';
import HostPage from 'containers/HostPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Header1 from 'components/Header/header_1';
import Footer from 'components/Footer';
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

function App(props) {
  const GeneralLayout = ({ component: Component, ...rest }) => {
    return (
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
  };

  const HotelLayout = ({ component: Component, ...rest }) => {
    return (
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
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Diamond Stay" defaultTitle="Diamond Stay">
        <meta name="description" content="Diamond Stay" />
      </Helmet>
      <Switch>
        <GeneralLayout exact path="/" component={HomePage} />
        <HotelLayout exact path="/login" component={LoginPage} />
        <HotelLayout exact path="/hotel/:hotelId" component={HotelDetailPage} />

        <GeneralLayout
          path="/search-result"
          component={SearchResultPage}
          exact
        />
        <GeneralLayout path="/host/:id" component={HostPage} exact />

        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route path="/location/:slug.:id" component={LocationPage} exact /> */}
        {/* <Route path="/search-result" component={LocationPage} exact /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
export default withRouter(App);
