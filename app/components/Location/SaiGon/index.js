/**
 *
 * Sai Gon
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import option1 from 'images/location/sg/1.jpg';
import option2 from 'images/location/sg/2.jpg';
import option3 from 'images/location/sg/3.jpg';
import option4 from 'images/location/sg/4.jpg';
import option5 from 'images/location/sg/5.jpg';
import option6 from 'images/location/sg/6.jpg';
import option7 from 'images/location/sg/7.jpg';
import LocationItem from '../location';

function SaiGon() {
  const options = [
    {
      id: 1,
      name: 'Gần Trung tâm!',
      description:
        'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh',
      image: option1,
      url: 'Hồ Chí Minh',
      convenience: [1],
    },

    {
      id: 3,
      name: 'Giá tốt chọn ngay!',
      description:
        'Trải nghiệm không gian homestay tiện nghi với mức giá không thể tốt hơn.',
      image: option3,
      url: 'Hồ Chí Minh',
      min_price: 500000,
      max_price: 1000000,
    },
    {
      id: 4,
      name: 'Triệu view sống ảo',
      description:
        'Top homestay triệu view sống ảo bạn không thể bỏ lỡ tại Sài Gòn.',
      image: option4,
      url: 'Hồ Chí Minh',
      type: [1, 5],
    },
    {
      id: 5,
      name: 'Bể bơi & BBQ',
      description:
        'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.',
      image: option5,
      url: 'Hồ Chí Minh',
      convenience: [2, 14],
    },
    {
      id: 6,
      name: 'Siêu giảm giá!',
      description:
        'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.',
      image: option6,
      url: 'Hồ Chí Minh',
      min_price: 1000000,
      max_price: 2000000,
    },
    {
      id: 7,
      name: 'Ở lâu giảm sâu!',
      description:
        'Top homestay phù hợp cho nhu cầu đi công tác khi bạn cần - Ở càng lâu, giá càng tốt!',
      image: option7,
      url: 'Hồ Chí Minh',
      min_price: 500000,
      max_price: 1000000,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'location-slider',
  };

  return (
    <section id="diamond-sg-option" className="diamond-option">
      <Container>
        <h2 className="page-title">
          Thiết lập trạng thái "bình thường mới" tại Sài Gòn
        </h2>
        <p className="mb-4">
          Top chỗ ở sạch đep, giá tốt tại TP.Hồ Chí Minh cho chuyến du lịch và
          công tác của bạn.
        </p>
        <Slider {...settings} className="custom-slider">
          {options &&
            options.map(option => (
              <LocationItem item={option} key={option.id} />
            ))}
        </Slider>
      </Container>
    </section>
  );
}

export default SaiGon;
