/**
 *
 * Welcome
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';

function Welcome() {
  return (
    <section id="diamond-welcome" className="content">
      <Container>
        <h2 className="welcome-title">Chào mừng đến với Diamond Stay!</h2>
        <div className="welcome-text">
          <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Diamond Stay</p>
          <p><a href="#">Đăng nhập</a> hoặc <a href="#">Đăng ký</a> để trải nghiệm !</p>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
