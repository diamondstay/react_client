import React from 'react';
import { Col, Row } from 'react-bootstrap';

function HostInfo() {
  return (
    <Col style={{ maxWidth: '20%' }}>
      <Row>
        <Col>
          <div className="label-host">
            <div className="label-host__logo">
              <img
                alt="anh"
                src="https://cdn.luxstay.com/users/220919/avatar_1_1576866089.jpg"
              />
            </div>
            <h1 className="label-host__name">Aimee House</h1>
            <p className="label-host__country">Viet Nam</p>
            <hr className="border-line" />
            <div className="label-host__social">
              <p>Tài khoản đã liên kết</p>
              <div className="facebook">
                <img
                  alt="face"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png"
                />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
export default HostInfo;
