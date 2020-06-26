/**
 *
 * Vung Tau
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import option1 from 'images/location/vt/1.jpg';
import option2 from 'images/location/vt/2.jpg';
import option3 from 'images/location/vt/3.jpg';
import option4 from 'images/location/vt/4.jpg';
import option5 from 'images/location/vt/5.jpg';
import option6 from 'images/location/vt/6.jpg';
import LocationItem from '../location';

function VungTau() {

  const options = [
    {
      id: 1,
      name: 'Cho cặp đôi',
      description: 'Trải qua kỳ nghỉ lãng mạn và đáng nhớ với gợi ý chỗ ở cực đẹp chỉ dành cho hai người',
      image: option1,
      url: 'cho-cap-doi'
    },
    {
      id: 2,
      name: 'Cho nhóm bạn',
      description: 'Chỗ ở tiện nghi, rộng rãi cho nhóm bạn và gia đình ở thành phố biến.',
      image: option2,
      url: 'cho-nhom-ban'
    },
    {
      id: 3,
      name: 'Giá ưu đãi',
      description: 'Top Homestay có thiết kế đẹp, giá siêu ưu đãi.',
      image: option3,
      url: 'gia-uu-dai'
    },
    {
      id: 4,
      name: 'Gần Bãi Sau',
      description: 'Chỗ ở gần bãi Sau giá siêu ưu đãi dành tặng bạn.',
      image: option4,
      url: 'gan-bai-sau'
    },
    {
      id: 5,
      name: 'Gần Bãi Trước',
      description: 'Chỗ ở view biển, gần bãi Trước với giá ưu đãi cho chuyến du lịch thêm hoàn hảo.',
      image: option5,
      url: 'gan-bai-truoc'
    },
    {
      id: 6,
      name: 'Giá dưới 1 triệu',
      description: 'Chỉ từ dưới 1 triệu/đêm cho một chỗ ở lý tưởng trung tâm Vũng Tàu.',
      image: option6,
      url: 'gia-duoi-1-trieu'
    }
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="diamond-vt-option" className="diamond-option content">
      <Container>
        <h2 className="page-title">Thiết lập trạng thái "bình thường mới" tại tại Vũng Tàu</h2>
        <p className="mb-4">Đổi gió cùng bạn bè hoặc người thân tại thành phố biển Vũng Tàu xinh đẹp</p>
        <Slider {...settings}>
          {options && options.map(option => (
            <LocationItem item={option} key={option.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default VungTau;
