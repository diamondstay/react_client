/**
 *
 * Promo
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'constants/index';

function Promo(props) {
  const { item } = { ...props };

  return (
    <Link to={'/room/' + item.id}>
      <section className="promo-item">
        <div className="promo-image">
          <div style={{ backgroundImage: `url(${item.image})` }} />
        </div>
        <div className="promo-content">
          {item.type_room ? (
            <div className="promo-type">{item.type_room}</div>
          ) : (
            <></>
          )}
          <h3 className="promo-name">{item.name}</h3>
          <div className="promo-description">
            {item.maximum_guests} khách <span className="bullet" />
            {item.num_bedrooms} phòng ngủ <span className="bullet" />
            {item.num_bathrooms} phòng tắm
          </div>
          <h4 className="promo-price">{item.price}/đêm</h4>
          <h5 className="promo-location">{item.location}</h5>
          <div
            className="promo-ratings stars"
            dangerouslySetInnerHTML={{
              __html: Filter.getReviewStars(item.rating),
            }}
          />
        </div>
      </section>
    </Link>
  );
}

export default Promo;
