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
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import 'styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faVimeo, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

library.add(
  faHome, faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax, faPaperPlane, faHeart,
  faFacebookF, faTwitter, faInstagram, faYoutube, faVimeo, faSoundcloud
);

const AppWrapper = styled.div``;

export default function App() {

  const AuthLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <>
          <Header />
          <Component {...matchProps} />
          <Footer />
        </>
      )} />
    )
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Diamond Stay" defaultTitle="Diamond Stay">
        <meta name="description" content="Diamond Stay" />
      </Helmet>
      <Switch>
        <AuthLayout exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
