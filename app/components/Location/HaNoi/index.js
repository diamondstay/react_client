/**
 *
 * Ha Noi
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import option1 from 'images/location/hn/1.jpg';
import option2 from 'images/location/hn/2.jpg';
import option3 from 'images/location/hn/3.jpg';
import option4 from 'images/location/hn/4.jpg';
import option5 from 'images/location/hn/5.jpg';
import option6 from 'images/location/hn/6.jpg';
import option7 from 'images/location/hn/7.jpg';
import LocationItem from '../location';

function HaNoi() {

  const options = [
    {
      id: 1,
      name: 'Giá cực đã!',
      description: 'Top nhà đẹp "giá yêu" - tất cả dưới 600k/đêm, cho bạn thoả sức lựa chọn.',
      image: option1,
      url: 'gia-cuc-da'
    },
    {
      id: 2,
      name: 'Gần phố cổ!',
      description: 'Khu vực gần trung tâm tiện lợi để di chuyển khắp Hà Nội',
      image: option2,
      url: 'gan-pho-co'
    },
    {
      id: 3,
      name: 'Top nhà đẹp!',
      description: 'Những căn homestay xinh xắn vạn người mê ở Hà Nội.',
      image: option3,
      url: 'top-nha-dep'
    },
    {
      id: 4,
      name: 'Siêu ưu đãi!',
      description: 'Top homestay giảm đến 50% từ các chủ nhà uy tín trên Luxstay!',
      image: option4,
      url: 'sieu-uu-dai'
    },
    {
      id: 5,
      name: 'Gần Hồ Tây!',
      description: 'Chỗ ở xinh xắn view hồ Tây lộng gió đang có giá tốt. Đừng bỏ lỡ!',
      image: option5,
      url: 'gan-ho-tay'
    },
    {
      id: 6,
      name: 'Lãng mạn cho cặp đôi',
      description: 'Hâm nóng tình cảm với chỗ ở lãng mạn bạn không thể bỏ lỡ',
      image: option6,
      url: 'lang-man-cho-cap-doi'
    },
    {
      id: 7,
      name: 'Một mình vẫn vui',
      description: 'Trải nghiệm chuyến du lịch 1 mình và cùng tận hưởng những trải nghiệm thú vị.',
      image: option7,
      url: 'mot-minh-van-vui'
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="diamond-hn-option" className="diamond-option">
      <Container>
        <h2 className="page-title">Thiết lập trạng thái "bình thường mới" tại Hà Nội</h2>
        <p className="mb-4">Khám phá từng góc phố Hà Nội cùng Top chỗ ở siêu ưu đãi.</p>
        <Slider {...settings}>
          {options && options.map(option => (
            <LocationItem item={option} key={option.id} />
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default HaNoi;
