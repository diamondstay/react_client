/**
 *
 * Da Lat
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import option1 from 'images/location/dl/1.jpg';
import option2 from 'images/location/dl/2.jpg';
import option3 from 'images/location/dl/3.jpg';
import option4 from 'images/location/dl/4.jpg';
import option5 from 'images/location/dl/5.jpg';
import option6 from 'images/location/dl/6.jpg';
import LocationItem from '../location';

function DaLat() {

  const options = [
    {
      id: 1,
      name: 'Nhà đẹp giá tốt',
      description: 'Top chỗ giá hấp dẫn, chỉ dưới 500k/đêm cho bạn thoả thích lựa chọn',
      image: option1,
      url: 'nha-dep-gia-tot'
    },
    {
      id: 2,
      name: 'Top homestay đẹp',
      description: 'Top homestay đẹp lịm tim khắp Đà Lạt cho bạn tha hồ check-in.',
      image: option2,
      url: 'top-homestay-dep'
    },
    {
      id: 3,
      name: 'Trung tâm Đà Lạt',
      description: 'Tiện lợi di chuyển khắp Đà Lạt một cách dễ dàng với các chỗ ở gần Trung tâm.',
      image: option3,
      url: 'trung-tam-da-lat'
    },
    {
      id: 4,
      name: 'Biệt thự đẹp',
      description: 'Khám phá những căn biệt thự đẹp giữa khung cảnh mộng mơ của Đà Lạt.',
      image: option4,
      url: 'biet-thu-dep'
    },
    {
      id: 5,
      name: 'Kì nghỉ lãng mạn',
      description: 'Trải nghiệm kỳ nghỉ lãng mạn chỉ dành riêng cho hai người.',
      image: option5,
      url: 'ki-nghi-lang-man'
    },
    {
      id: 6,
      name: 'Cho nhóm bạn',
      description: 'Trải qua kỳ nghỉ đáng nhớ cùng gợi ý chỗ ở cho nhóm đông người cực thú vị',
      image: option6,
      url: 'cho-nhom-ban'
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'location-slider'
  };

  return (
    <section id="diamond-dl-option" className="diamond-option content">
      <Container>
        <h2 className="page-title">Thiết lập trạng thái "bình thường mới" tại Đà Lạt</h2>
        <p className="mb-4">Đến Đà Lạt cùng người thương để thấy cảm xúc vẫn vẹn nguyên như những lần đầu.</p>
        <Slider {...settings} className="custom-slider">
          {options && options.map(option => (
            <LocationItem item={option} key={option.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default DaLat;
