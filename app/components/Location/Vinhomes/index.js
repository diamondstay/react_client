/**
 *
 * Vinhomes
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import option1 from 'images/location/vin/1.png';
import option2 from 'images/location/vin/2.png';
import option3 from 'images/location/vin/3.png';
import option4 from 'images/location/vin/4.png';
import option5 from 'images/location/vin/5.png';
import option6 from 'images/location/vin/6.png';
import option7 from 'images/location/vin/7.png';
import option8 from 'images/location/vin/8.png';
import LocationItem from '../location';

function Vinhomes() {

  const options = [
    {
      id: 1,
      name: 'Vinhomes Central Park - TP. HCM',
      description: 'Hoà mình vào nhịp sống sôi động của khu đô thị hiện đại bậc nhất Sài thành.',
      image: option1,
      url: 'vinhomes-central-park-tp-hcm'
    },
    {
      id: 2,
      name: 'Vinhomes Landmark 81 - TP. HCM',
      description: 'Chạm tay vào bầu trời và thu về tầm mắt toàn cảnh vẻ đẹp Sài Gòn.',
      image: option2,
      url: 'vinhomes-landmark-81-tp-hcm'
    },
    {
      id: 3,
      name: 'Vinhomes Golden River - TP. HCM',
      description: 'Tan chảy trước một Sài Gòn lãng mạn của những ngọn đèn phố lung linh',
      image: option3,
      url: 'vinhomes-golden-river-tp-hcm'
    },
    {
      id: 4,
      name: 'Vinhomes Times City - Hà Nội',
      description: 'Tận hưởng không gian sống lý tưởng trong khu đô thị đáng sống bậc nhất tại thành phố Hà Nội.',
      image: option4,
      url: 'vinhomes-times-city-ha-noi'
    },
    {
      id: 5,
      name: 'Vinhomes Metropolis - Hà Nội',
      description: 'Ngỡ ngàng trước một Hà Nội thật khác khi phố đã lên đèn.',
      image: option5,
      url: 'vinhomes-metropolis-ha-noi'
    },
    {
      id: 6,
      name: 'Vinhomes Royal City - Hà Nội',
      description: 'Lạc giữa một “châu Âu thu nhỏ” ngay tại Hà Nội',
      image: option6,
      url: 'vinhomes-royal-city-ha-noi'
    },
    {
      id: 7,
      name: 'Vinhomes Dragon Bay - Hạ Long',
      description: 'Bừng tỉnh trong ánh nắng tràn ngập khắp căn phòng giữa Hạ Long xanh biếc.',
      image: option7,
      url: 'vinhomes-dragon-bay-ha-long'
    },
    {
      id: 8,
      name: 'Vinhomes Green Bay - Hà Nội',
      description: 'Trải nghiệm thiên đường sống đích thực với những đặc quyền chưa hề có',
      image: option8,
      url: 'vinhomes-green-bay-ha-noi'
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
    <section id="diamond-vin-option" className="diamond-option content">
      <Container>
        <h2 className="page-title">Vinhomes</h2>
        <p className="mb-4">Tận hưởng không gian sống tuyệt vời tại thương hiệu đô thị hàng đầu Việt Nam</p>
        <Slider {...settings}>
          {options && options.map(option => (
            <LocationItem item={option} key={option.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default Vinhomes;
