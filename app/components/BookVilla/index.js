/**
 *
 * Best Places
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import villa1 from 'images/villa/vt.jpg';
import villa2 from 'images/villa/hn.jpg';
import villa3 from 'images/villa/dn.jpg';
import villa4 from 'images/villa/nt.jpg';
import villa5 from 'images/villa/hl.jpg';
import villa6 from 'images/villa/sg.jpg';

function BookVilla() {

  const villas = [
    {
      id: 1,
      name: 'Top Villa Vũng Tàu view đẹp',
      description: 'Top villa view biển tại Vũng Tàu cực đẹp dành riêng cho bạn.',
      image: villa1,
      url: 'top-villa-vung-tau-view-dep'
    },
    {
      id: 2,
      name: 'Top Villa quanh Hà Nội',
      description: 'Chọn ngay căn villa sang chảnh và tận hưởng những ngày yên bình tại Hà Nội.',
      image: villa2,
      url: 'top-villa-quanh-ha-noi'
    },
    {
      id: 3,
      name: 'Top Villa Đà Nẵng - Hội An - Huế',
      description: 'Top villa vị trí sát biển, view cực đẹp và đầy đủ tiện nghi tại Đà Nẵng - Hội An đang đợi bạn.',
      image: villa3,
      url: 'top-villa-da-nang-hoi-an-hue'
    },
    {
      id: 4,
      name: 'Top Villa Nha Trang giá tốt',
      description: 'Biển xanh, cát trắng, nắng vàng và top villa view biển đẹp ngất ngây chỉ có tại Nha Trang.',
      image: villa4,
      url: 'top-villa-nha-trang-gia-tot'
    },
    {
      id: 5,
      name: 'Top Villa Hạ Long gần biển',
      description: 'Villa tại Hạ Long với giá cực tốt, view đẹp và thích hợp cho nhóm đông đang chờ đón bạn.',
      image: villa5,
      url: 'top-villa-ha-long-gan-bien'
    },
    {
      id: 6,
      name: 'Top Villa sang chảnh Sài Gòn',
      description: 'Tận hưởng không gian sang trọng và đẳng cấp với top villa tại Sài Gòn nhộn nhịp.',
      image: villa6,
      url: 'top-villa-sang-chanh-sai-gon'
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="diamond-book-villa" className="content pb-0">
      <Container>
        <h2 className="page-title">Book Villa đi nào. Mãi bên nhau bạn nhé!</h2>
        <p className="mb-4">Top Villa sang chảnh đón hè đã sẵn sàng trên Luxstay. Book hôm nay đi ngay cùng nhóm bạn.
          Đặc biệt, tặng mã giảm giá đến 400.000đ cho các chỗ ở trong chương trình.
        </p>
        <Slider {...settings}>
          {villas && villas.map(villa => (
            <Link to={villa.url} key={villa.id}>
              <div className="villa-item">
                <div className="villa-image">
                  <div style={{ backgroundImage: `url(${villa.image})` }}/>
                </div>
                <div className="villa-text">
                  <h5 className="villa-name">{villa.name}</h5>
                  <p className="villa-description">{villa.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default BookVilla;
