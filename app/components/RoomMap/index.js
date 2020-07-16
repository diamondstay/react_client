/**
 *
 * Room Map
 *
 */

import React from 'react';
import GoogleMapReact from 'google-map-react';
import isNaN from 'lodash/isNaN';

const MapMarker = () => <i className="map-marker" />;

function RoomMap(props) {
  const lat = parseFloat(props.lat);
  const long = parseFloat(props.long);

  const defaultProps = {
    center: {
      lat: lat,
      lng: long
    },
    zoom: 18
  };

  return (
    <div id="diamond-hotel-map" style={{ height: '500px', width: '100%' }}>
      {
        isNaN(lat) && isNaN(long) ? <></> :
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCadXEXnS7zySJeaRvUw3UrXOqSf8aCp_Q' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapMarker
              lat={lat}
              lng={long}
            />
          </GoogleMapReact>
      }
    </div>
  );
}

export default RoomMap;
