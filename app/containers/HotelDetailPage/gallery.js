/**
 *
 * Hotel Gallery
 *
 */

import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HotelGallery(props) {

  const gallery = props.media;

  let settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  };

  return (
    <section id="diamond-hotel-gallery">
      <Slider {...settings}>
        {gallery && gallery.map(photo => (
          <figure className="gallery-slide" key={photo.id}>
            <img src={photo.photo_url} alt="" />
          </figure>
        ))}
      </Slider>
    </section>
  );
}

export default HotelGallery;
