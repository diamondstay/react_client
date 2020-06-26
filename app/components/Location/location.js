/**
 *
 * Location
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

function LocationItem(props) {
  const location = props.item;

  return (
    <Link to={location.url}>
      <div className="location-item">
        <div className="location-image">
          <div style={{ backgroundImage: `url(${location.image})` }}/>
        </div>
        <div className="location-text">
          <h5 className="location-name">{location.name}</h5>
          <p className="location-description">{location.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default LocationItem;
