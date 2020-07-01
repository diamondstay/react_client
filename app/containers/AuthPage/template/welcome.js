/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Welcome() {

  return (
    <section id="auth-welcome">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className="welcome-content">
              <h2 className="welcome-title">Đăng ký thành viên Diamond Stay - Tích điểm thưởng và nhận ưu đãi</h2>
              <p className="welcome-desc">Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Welcome;
