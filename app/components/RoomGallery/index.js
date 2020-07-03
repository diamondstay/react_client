/**
 *
 * Room Gallery
 *
 */

import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoomGallery(props) {

  const { gallery } = {...props};

  let settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  };

  return (
    <section id="diamond-hotel-gallery">
      <Slider {...settings}>
        {gallery && gallery.map((photo, index) => (
          <figure className="gallery-slide" key={index}>
            <img src={photo} alt="" />
          </figure>
        ))}
      </Slider>
    </section>
  );
}

export default RoomGallery;
