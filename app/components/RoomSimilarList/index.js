/**
 *
 * Room Other List
 *
 */

import React from 'react';
import RoomItem from 'components/RoomItem';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoomSimilarList(props) {

  const { list } = {...props};

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="diamond-similar-list">
      <h2 className="page-title mb-4">Chỗ ở tương tự</h2>

      <Slider {...settings} className="custom-slider">
        { list && list.map(item => (
          <RoomItem item={item} key={item.id} />
        ))}
      </Slider>
    </section>
  );
}

export default RoomSimilarList;
