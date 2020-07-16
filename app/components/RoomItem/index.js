/**
 *
 * Room Item
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'constants/index';
import defaultImg from 'images/default.jpg';

function RoomItem(props) {
  const { item } = { ...props };

  return (
    <Link to={'/room/' + item.id}>
      <section className="promo-item">
        <div className="promo-image">
          <div style={{ backgroundImage: `url(${item.thumb ? item.thumb : defaultImg})` }} />
        </div>
        <div className="promo-content">
          <div className="promo-type">{item.type}</div>
          <h3 className="promo-name">{item.name}</h3>
          <div className="promo-description">
            {item.capacity_max} khách <span className="bullet" />
            {item.amount_bedroom} phòng ngủ <span className="bullet" />
            {item.amount_bathroom} phòng tắm
          </div>
          {
            item.price_promotion > 0 && item.price_promotion !== item.price ?
              <h4 className="promo-price">{Filter.formatPrice(item.price_promotion)}/đêm <span className="strike">{Filter.formatPrice(item.price)}</span></h4>
              :
              <h4 className="promo-price">{Filter.formatPrice(item.price)}/đêm</h4>
          }
          <h5 className="promo-location">{item.village}, {item.district}, {item.province}</h5>
          {/*<div*/}
          {/*  className="promo-ratings stars"*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: Filter.getReviewStars(item.rating),*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </section>
    </Link>
  );
}

export default RoomItem;
