/**
 *
 * Intro
 *
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IntroImg from 'images/background/intro.png';
import Logo from 'images/logo.png';
import QRCode from 'images/brand/qr-code.png';
import AppStore from 'images/brand/apple-store.svg';
import Huawei from 'images/brand/huawei.svg';
import GooglePlay from 'images/brand/google-play.svg';
import { Fade } from 'react-reveal';

function Intro() {
  return (
    <section id="diamond-intro" className="content pb-0">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <figure className="intro-logo">
              <img src={Logo} alt="Diamond Stay" />
            </figure>
            <div className="intro-text">
              <h2 className="intro-title">TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT</h2>
              <p>Diamond Stay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến
                đi mang đầy trải nghiệm. Với Diamond Stay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung
                cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
              </p>
            </div>
            <div className="intro-action">
              <Row>
                <Col md={6} xl={4}>
                  <div className="qr-code">
                    <img src={QRCode} alt="Diamond Stay" />
                  </div>
                </Col>
                <Col md={6} xl={8}>
                  <Row>
                    <Col xs={12} sm={6}>
                      <a className="download-app" target="_blank" rel="nofollow" href="https://itunes.apple.com/us/app/luxstay-%C4%91%E1%BA%B7t-ph%C3%B2ng-homestay/id1339510380?mt=8">
                        <img alt="Apple Store" src={AppStore} />
                      </a>
                    </Col>
                    <Col xs={12} sm={6}>
                      <a className="download-app" target="_blank" rel="nofollow" href="https://wap2.hispace.hicloud.com/uowap/index.jsp#/detailApp/C101516187?accessId=058e904ea40444f1baba622a16bb9466">
                        <img alt="Huawei" src={Huawei} />
                      </a>
                    </Col>
                    <Col xs={12} sm={6}>
                      <a className="download-app" target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=net.luxstay.android">
                        <img alt="Huawei" src={GooglePlay} />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <Fade>
              <figure className="intro-image">
                <img src={IntroImg} alt="Diamond Stay" />
              </figure>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;
