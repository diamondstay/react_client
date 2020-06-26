import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { email, phone } from 'components/Icon';
import { Link } from 'react-router-dom';
import Logo from 'images/logo.png';
import QRCode from 'images/brand/qr-code.png';
import AppStore from 'images/brand/apple-store.svg';
import Huawei from 'images/brand/huawei.svg';
import GooglePlay from 'images/brand/google-play.svg';
import Visa from 'images/brand/visa.svg';
import Mastercard from 'images/brand/mastercard.svg';
import Maestro from 'images/brand/maestro.svg';
import BCT from 'images/brand/bct.png';
import DMCA from 'images/brand/dmca.png';

function Footer() {
  return (
    <footer id="diamond-footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="col-md-20">
            <figure className="footer-logo">
              <img src={Logo} alt="Diamond Stay" />
            </figure>
            <div className="contact-item">
              <div>
                <i className="item-icon">
                  {email}
                </i>
              </div>
              <div>
                <div className="item-text">
                  <h4>Email</h4>
                  <p><a href="mailto:diamondstay@gmail.com">diamondstay@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div>
                <i className="item-icon">
                  {phone}
                </i>
              </div>
              <div>
                <div className="item-text">
                  <h4>Điện thoại</h4>
                  <p><a href="tel:18006586">1800 6586</a></p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">TOP homestay yêu thích</h5>
            <ul className="footer-list">
              <li>
                <Link to="/homestay/da-lat">Homestay Đà Lạt</Link>
              </li>
              <li>
                <Link to="/homestay/ha-noi">Homestay Hà Nội</Link>
              </li>
              <li>
                <Link to="/homestay/ho-chi-minh">Homestay Hồ Chí Minh</Link>
              </li>
              <li>
                <Link to="/homestay/sapa">Homestay Sapa</Link>
              </li>
              <li>
                <Link to="/homestay/vung-tau">Homestay Vũng Tàu</Link>
              </li>
              <li>
                <Link to="/homestay/tam-dao">Homestay Tam Đảo</Link>
              </li>
              <li>
                <Link to="/homestay/hoi-an">Homestay Hội An</Link>
              </li>
              <li>
                <Link to="/homestay/da-nang">Homestay Đà Nẵng</Link>
              </li>
              <li>
                <Link to="/homestay/ha-long">Homestay Hạ Long</Link>
              </li>
              <li>
                <Link to="/homestay/phan-thiet">Homestay Phan Thiết</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">Không gian ưa thích</h5>
            <ul className="footer-list">
              <li>
                <Link to="/can-ho-dich-vu">Căn hộ dịch vụ</Link>
              </li>
              <li>
                <Link to="/biet-thu">Biệt thự</Link>
              </li>
              <li>
                <Link to="/nha-rieng">Nhà riêng</Link>
              </li>
              <li>
                <Link to="/studio">Studio</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">Về chúng tôi</h5>
            <ul className="footer-list">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/dieu-khoan-hoat-dong">Điều khoản hoạt động</Link>
              </li>
              <li>
                <a href="tel:18006586">1800 6586</a>
              </li>
              <li>
                <a href="mailto:diamondstay@gmail.com">diamondstay@gmail.com</a>
              </li>
              <li>
                <Link to="/host">Trang thông tin dành cho chủ nhà</Link>
              </li>
              <li>
                <Link to="/tuyen-dung">Cơ hội nghề nghiệp</Link>
              </li>
              <li>
                <Link to="/tap-chi">Tạp chí du lịch</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">Tải ứng dụng Luxstay</h5>
            <Row>
              <Col xs={6}>
                <div className="qr-code">
                  <img src={QRCode} alt="Diamond Stay" />
                </div>
              </Col>
              <Col xs={6}>
                <ul className="footer-download">
                  <li>
                    <a target="_blank" rel="nofollow" href="https://itunes.apple.com/us/app/luxstay-%C4%91%E1%BA%B7t-ph%C3%B2ng-homestay/id1339510380?mt=8">
                      <img alt="Apple Store" src={AppStore} />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="nofollow" href="https://wap2.hispace.hicloud.com/uowap/index.jsp#/detailApp/C101516187?accessId=058e904ea40444f1baba622a16bb9466">
                      <img alt="Huawei" src={Huawei} />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=net.luxstay.android">
                      <img alt="Huawei" src={GooglePlay} />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="footer-gap" />
        <Row>
          <Col xs={12} sm={4} className="col-md-40 offset-md-20">
            <h5 className="footer-title">Secure Your Transaction</h5>
            <ul className="footer-pay">
              <li>
                <img alt="Visa" width="100" height="60" src={Visa} />
              </li>
              <li>
                <img alt="Mastercard" width="100" height="60" src={Mastercard} />
              </li>
              <li>
                <img alt="Maestro" width="100" height="60" src={Maestro} />
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">Certification</h5>
            <ul className="footer-certification">
              <li>
                <a href="http://online.gov.vn/WebsiteDisplay.aspx?DocId=45648" rel="nofollow">
                  <img alt="Visa" width="100" src={BCT} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.dmca.com/Protection/Status.aspx?ID=b9ae1144-725f-4e8a-8961-bb0c626266e6&amp;refurl=https://www.luxstay.com/vi" rel="nofollow">
                  <img alt="Visa" width="100" src={DMCA} />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="col-md-20">
            <h5 className="footer-title">FOLLOW US</h5>
            <ul className="social-networking-list">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-gap" />
      </Container>
    </footer>
  );
}

export default Footer;
