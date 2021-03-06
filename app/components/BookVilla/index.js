/**
 *
 * Book Villa
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import villa1 from 'images/villa/vt.jpg';
import villa2 from 'images/villa/hn.jpg';
import villa3 from 'images/villa/dn.jpg';
import villa4 from 'images/villa/nt.jpg';
import villa5 from 'images/villa/hl.jpg';
import villa6 from 'images/villa/sg.jpg';
import LocationItem from '../Location/location';

function BookVilla() {
  const villas = [
    {
      id: 1,
      name: 'Top Villa Vũng Tàu view đẹp',
      description:
        'Top villa view biển tại Vũng Tàu cực đẹp dành riêng cho bạn.',
      image: villa1,
      url: 'Bà Rịa - Vũng Tàu',
    },
    {
      id: 2,
      name: 'Top Villa quanh Hà Nội',
      description:
        'Chọn ngay căn villa sang chảnh và tận hưởng những ngày yên bình tại Hà Nội.',
      image: villa2,
      url: 'Hà Nội',
    },
    {
      id: 3,
      name: 'Top Villa Đà Nẵng - Hội An - Huế',
      description:
        'Top villa vị trí sát biển, view cực đẹp và đầy đủ tiện nghi tại Đà Nẵng - Hội An đang đợi bạn.',
      image: villa3,
      url: 'Đà Nẵng',
    },
    {
      id: 4,
      name: 'Top Villa Nha Trang giá tốt',
      description:
        'Biển xanh, cát trắng, nắng vàng và top villa view biển đẹp ngất ngây chỉ có tại Nha Trang.',
      image: villa4,
      url: 'Đà Nẵng',
    },
    {
      id: 5,
      name: 'Top Villa Hạ Long gần biển',
      description:
        'Villa tại Hạ Long với giá cực tốt, view đẹp và thích hợp cho nhóm đông đang chờ đón bạn.',
      image: villa5,
      url: 'Quảng Ninh',
    },
    {
      id: 6,
      name: 'Top Villa sang chảnh Sài Gòn',
      description:
        'Tận hưởng không gian sang trọng và đẳng cấp với top villa tại Sài Gòn nhộn nhịp.',
      image: villa6,
      url: 'Hồ Chí Minh',
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section id="diamond-book-villa" className="content">
      <Container>
        <h2 className="page-title">Book Villa đi nào. Mãi bên nhau bạn nhé!</h2>
        <p className="mb-4">
          Top Villa sang chảnh đón hè đã sẵn sàng trên Diamond Stay. Book hôm nay đi
          ngay cùng nhóm bạn. Đặc biệt, tặng mã giảm giá đến 400.000đ cho các
          chỗ ở trong chương trình.
        </p>
        <Slider {...settings} className="custom-slider">
          {villas &&
            villas.map(villa => <LocationItem item={villa} key={villa.id} />)}
        </Slider>
      </Container>
    </section>
  );
}

export default BookVilla;
