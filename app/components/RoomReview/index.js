/**
 *
 * Room Review
 *
 */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/appconfig';
import { DateTime } from 'constants/index';
import { Collapse } from 'reactstrap';
import Rating from 'react-rating';
import reactLocalStorage from '../../utils/localStorage';
import './style.scss';
function RoomReview(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [content, setContent] = useState('');
  const [contentReview, setContentReview] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const { reviews, roomId } = props;
  console.log(contentReview);

  const getReviewTime = date => {
    return moment(date).format(DateTime.SHORT_DATE_1);
  };
  const getHeaders = acc => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: acc.access_token,
        Accept: 'application/json',
      },
    };
  };

  const getReviewStars = number => {
    let stars = '';
    for (let i = 0; i < number; i++) {
      stars += '<i class="icon star" /></i>';
    }
    return stars;
  };

  useEffect(() => {
    setContentReview(reviews);
  }, [reviews]);

  const sentReview = () => {
    debugger;
    const userAccount = reactLocalStorage.getObject('user-account');
    axios
      .post(
        `${API_BASE_URL}/client/review?aid=${roomId}&star=${rate}&comment=${content}`,
        {},
        getHeaders(userAccount),
      )
      .then(function(response) {
        debugger;
        console.log(response);
        // handle success
        const newComment = response.data.data;
        console.log(newComment);
        setContentReview([...contentReview, newComment]);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    toggle();
    setContent('');
  };
  return (
    <section id="diamond-review">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '70px',
          justifyContent: 'space-between',
        }}
      >
        <h2 className="page-title" style={{ marginBottom: 0 }}>
          Đánh giá
        </h2>
        <span
          onClick={toggle}
          style={{
            background: '#FF5722',
            color: '#fff',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          Để lại đánh giá
        </span>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="review-box">
          <span
            style={{
              marginBottom: '20px',
              color: '#555',
              fontWeight: 'bold',
            }}
          >
            Để lại đánh giá của bạn{' '}
          </span>
          <div className="rating">
            <Rating
              onChange={rate => setRate(rate)}
              emptySymbol={
                <img
                  style={{ width: '22px', height: '22px' }}
                  src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png"
                  className="icon"
                />
              }
              fullSymbol={
                <img
                  style={{
                    width: '22px',
                    height: '22px',
                  }}
                  src="http://dreyescat.github.io/react-rating/assets/images/star-yellow.png"
                  className="icon"
                />
              }
            />
          </div>
          <input
            className="input-content"
            autoFocus={true}
            value={content}
            name="content"
            onChange={e => setContent(e.target.value)}
          />
          <span className="btn-sent" onClick={sentReview}>
            Hoàn thành
          </span>
        </div>
      </Collapse>
      {contentReview &&
        contentReview.map(review => (
          <div className="review-item" key={review.id}>
            <div className="review-header">
              <div className="review-avatar">
                <img src={review.avatar} alt={review.name} />
              </div>
              <div className="review-info">
                <h4 className="review-name">
                  {review.name}
                  <span
                    className="stars ml-3"
                    dangerouslySetInnerHTML={{
                      __html: getReviewStars(review.star_number),
                    }}
                  />
                </h4>
                <div className="review-time">
                  {getReviewTime(review.created_at)}
                </div>
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
