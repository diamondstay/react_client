/**
 *
 * Mien Trung
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import option1 from 'images/location/dn-ha-h/1.jpg';
import option2 from 'images/location/dn-ha-h/2.jpg';
import option3 from 'images/location/dn-ha-h/3.jpg';
import option4 from 'images/location/dn-ha-h/4.jpg';
import option5 from 'images/location/dn-ha-h/5.jpg';
import LocationItem from '../location';

function MienTrung() {

  const options = [
    {
      id: 1,
      name: 'Không lo về giá!',
      description: 'Top chỗ ở giá tốt ở Đà Nẵng, Hội An, Huế đang chờ bạn khám phá!',
      image: option1,
      url: 'khong-lo-ve-gia'
    },
    {
      id: 2,
      name: 'Huế Đẹp và Thơ',
      description: 'Tận hưởng vẻ đẹp trầm mặc riêng có của Huế.',
      image: option2,
      url: 'hue-dep-va-tho'
    },
    {
      id: 3,
      name: 'Phố Cổ Hội An',
      description: 'Top chỗ ở giá tốt tại Phố cổ Hội An xinh đẹp đang chờ đón bạn!',
      image: option3,
      url: 'pho-co-hoi-an'
    },
    {
      id: 4,
      name: 'Cho Cặp Đôi',
      description: 'Khám phá ngay nững chỗ ở lãng mạn cho các cặp đôi tại Đà Nẵng',
      image: option4,
      url: 'cho-cap-doi'
    },
    {
      id: 5,
      name: 'Cho Nhóm Đông',
      description: 'Chỗ ở rộng rãi, tiện nghi cho gia đình hoặc nhóm bạn đông người đang có giá ưu đãi. Đặt ngay!',
      image: option5,
      url: 'cho-nhom-dong'
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
    <section id="diamond-dn-ha-h-option" className="diamond-option">
      <Container>
        <h2 className="page-title">Thiết lập trạng thái "bình thường mới" dọc miền Trung</h2>
        <p className="mb-4">Thiên đường biển miền Trung từ Đà Nẵng - Hội An - Huế đầy nắng và gió đang chờ đón bạn khám phá.</p>
        <Slider {...settings} className="custom-slider">
          {options && options.map(option => (
            <LocationItem item={option} key={option.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default MienTrung;
