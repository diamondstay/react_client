/**
 *
 * Host
 *
 */

import React from 'react';
import { DateTime } from 'constants/index';
import moment from 'moment';

function Host(props) {

  const { host } = {...props};

  const getJoinTime = date => moment(date).format(DateTime.SHORT_DATE_1);

  return (
    <div className="host-item">
      <div className="host-avatar">
        <img src={host.owner_avatar} alt={host.owner} />
      </div>
      <div className="host-info">
        <h4 className="host-name">{host.owner}</h4>
        <h5 className="host-time">
          Tham gia {getJoinTime(host.owner_join_date)}
        </h5>
      </div>
    </div>
  );
}

export default Host;
