/**
 *
 * Price
 *
 */

import React from 'react';
import { Filter } from 'constants/index';

function Price(props) {

  const { detail } = {...props};

  return (
    <div className="booking-price">
      {detail.price_promotion > 0 && detail.price_promotion !== detail.price ? (
        <>
          <span className="price">
            {Filter.formatVndCurrency(detail.price_promotion)}
          </span>
          <span className="one-night">/đêm</span>
          <span className="original-price strike">
            {Filter.formatVndCurrency(detail.price)}
          </span>
        </>
      ) : (
        <>
          <span className="price">
            {Filter.formatVndCurrency(detail.price)}
          </span>
          <span className="one-night">/đêm</span>
        </>
      )}
    </div>
  );
}

export default Price;
