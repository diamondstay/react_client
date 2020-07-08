/**
 *
 * Best Places
 *
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import place1 from 'images/places/hcm.png';
import place2 from 'images/places/vt.png';
import place3 from 'images/places/dn.png';
import place4 from 'images/places/dl.png';
import place5 from 'images/places/hn.png';
import place6 from 'images/places/nt.png';
import place7 from 'images/places/qn.png';
import place8 from 'images/places/ha.png';

function BestPlaces(props) {
  const { bestPlaces } = props;
  console.log('lllll', bestPlaces);
  const places = [
    {
      id: 1,
      name: 'TP. Hồ Chí Minh',
      slot: 3357,
      image: place1,
      url: 'ho-chi-minh',
    },
    {
      id: 2,
      name: 'Vũng Tàu',
      slot: 858,
      image: place2,
      url: 'vung-tau',
    },
    {
      id: 3,
      name: 'Đà Nẵng',
      slot: 1589,
      image: place3,
      url: 'da-nang',
    },
    {
      id: 4,
      name: 'Đà Lạt',
      slot: 2083,
      image: place4,
      url: 'da-lat',
    },
    {
      id: 5,
      name: 'Hà Nội',
      slot: 3181,
      image: place5,
      url: 'ha-noi',
    },
    {
      id: 6,
      name: 'Nha Trang',
      slot: 954,
      image: place6,
      url: 'nha-trang',
    },
    {
      id: 7,
      name: 'Quảng Ninh',
      slot: 458,
      image: place7,
      url: 'quang-ninh',
    },
    {
      id: 8,
      name: 'Hội An',
      slot: 435,
      image: place8,
      url: 'hoi-an',
    },
  ];

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section id="diamond-best-places">
      <Container>
        <h2 className="page-title">Địa điểm nổi bật</h2>
        <p className="mb-4">
          Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
        </p>
        <Slider {...settings} className="custom-slider">
          {bestPlaces &&
            bestPlaces.map(place => (
              <Link
                to={`/search?${queryString.stringify({
                  convenience: '',
                  type: '',

                  checkin: '2020-07-11',
                  checkout: '2020-07-13',

                  province: place.name,
                  limit: 10,
                  page: 1,
                  sort_by_price: 'desc',
                })}`}
                key={place.name}
              >
                <div className="place-item">
                  <div className="place-image">
                    <div
                      style={{
                        backgroundImage: `url(https://cdn.luxstay.com/home/location/location_10_1559303118.png)`,
                      }}
                    />
                  </div>
                  <div className="place-text">
                    <h4 className="place-name">{place.name}</h4>
                    <p className="place-slot">
                      <strong>{place.amount}</strong> Chỗ ở
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </Slider>
      </Container>
    </section>
  );
}

export default BestPlaces;
