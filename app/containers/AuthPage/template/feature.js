/**
 *
 * Feature
 *
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import feature1 from 'images/icon/coins.png';
import feature2 from 'images/icon/top-sales.png';
import feature3 from 'images/icon/wallet.png';
import feature4 from 'images/icon/backpack.png';

function Feature() {

  const features = [
    {
      id: 1,
      image: feature1,
      title: 'Tích điểm nhanh chóng',
      desc: 'Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành Lux Credit để du lịch nhiều hơn nữa.'
    },
    {
      id: 2,
      image: feature2,
      title: 'Tiện ích thông minh',
      desc: 'Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.'
    },
    {
      id: 3,
      image: feature3,
      title: 'Thanh toán đơn giản',
      desc: 'Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần sau.'
    },
    {
      id: 4,
      image: feature4,
      title: 'Ưu đãi mỗi ngày',
      desc: 'Nhận thông báo ưu đãi từ Diamond Stay khi có kế hoạch du lịch để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.'
    },
  ];

  return (
    <section id="auth-feature" className="content">
      <Row>
        {features && features.map(feature => (
          <Col xs={12} sm={6} key={feature.id}>
            <div className="feature-item">
              <figure className="feature-icon">
                <img src={feature.image} alt="" />
              </figure>
              <h4 className="feature-name">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Feature;
