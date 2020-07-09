/**
 *
 * Thank You
 *
 */

import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Welcome from './template/welcome';
import Feature from './template/feature';
import { Link } from 'react-router-dom';

function ThankYou() {

  return (
    <article id="diamond-thank-you">
      <Welcome />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Feature />
          </Col>
          <Col xs={12} md={4}>
            <section id="auth-form">
              <h2 className="page-title">Đăng ký thành công !</h2>
              <p className="pb-2">Vui lòng kiểm tra email để hoàn tất thông tin đăng nhập của bạn.</p>
              <p><Link to={'/'} className="text-orange">Quay lại trang chủ.</Link></p>
              <p><Link to={'/login'} className="text-orange">Đăng nhập ngay.</Link></p>
            </section>
          </Col>
        </Row>
      </Container>
      <div className="gap-50" />
    </article>
  );
}

export default ThankYou;
