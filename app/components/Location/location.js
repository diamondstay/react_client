/**
 *
 * Location
 *
 */

import React from 'react';
import queryString from 'query-string';
import { withRouter, Link } from 'react-router-dom';

function LocationItem(props) {
  const location = props.item;

  return (
    <Link
      to={`/search?${queryString.stringify({
        convenience: location.convenience,
        type: location.type,

        checkin: '2020-07-18',
        checkout: '2020-10-30',
        min_price: location.min_price,
        max_price: location.max_price,
        province: location.url,
        limit: 10,
        page: 1,
        sort_by_price: 'desc',
      })}`}
    >
      <div className="location-item">
        <div className="location-image">
          <div style={{ backgroundImage: `url(${location.image})` }} />
        </div>
        <div className="location-text">
          <h5 className="location-name">{location.name}</h5>
          <p className="location-description">{location.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default withRouter(LocationItem);
