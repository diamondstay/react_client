import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.scss';
import Room from '../../components/Room';
import HostInfo from '../../components/HostInfo';
import CommentItem from '../../components/CommentItem';

function HostPage() {
  return (
    <Container>
      <Row style={{ marginBottom: '40px' }}>
        {/* Phan label */}
        <HostInfo />
        <Col style={{ maxWidth: '80%' }}>
          <p
            style={{
              fontWeight: '700',
              marginTop: '25px',
              marginBottom: '0px',
              fontSize: '17px',
            }}
          >
            Có 15 chỗ ở cho bạn lựa chọn
          </p>
          <Row className="flex-wrap">
            {/* phan item sp */}
            <Room width={25} />
          </Row>
        </Col>
      </Row>
      {/* Phan binh luan  */}
      <div className="evaluate">
        <h2 className="page-title" style={{ marginBottom: '25px' }}>
          Đánh giá
        </h2>
        <>
          <CommentItem />
        </>
      </div>
    </Container>
  );
}
export default HostPage;
