/**
 *
 * Room Review
 *
 */

import React from 'react';
import moment from 'moment';
import { DateTime } from 'constants/index';

function RoomReview(props) {

  const { reviews } = {...props};

  const getReviewTime = (date) => {
    return moment(date).format(DateTime.SHORT_DATE_1);
  };

  const getReviewStars = (number) => {
    let stars = '';
    for (let i = 0; i < number; i ++) {
      stars += '<i class="icon star" /></i>';
    }
    return stars;
  };

  return (
    <section id="diamond-review">
      <h2 className="page-title">Đánh giá</h2>

      {reviews && reviews.map(review => (
        <div className="review-item" key={review.id}>
          <div className="review-header">
            <div className="review-avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <div className="review-info">
              <h4 className="review-name">
                {review.name}
                <span className="stars ml-3" dangerouslySetInnerHTML={{__html: getReviewStars(review.star_number)}} />
              </h4>
              <div className="review-time">{getReviewTime(review.created_at)}</div>
            </div>
          </div>
          <div className="review-body">
            <div className="review-text">{review.content}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RoomReview;
