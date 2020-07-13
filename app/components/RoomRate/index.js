/**
 *
 * oom Rate
 *
 */

import React from 'react';
import { Filter} from 'constants/index';

function RoomRate(props) {

  const { detail } = {...props};

  return (
    <section id="diamond-room-rate">
      <h2 className="page-title">Giá phòng</h2>

      <div className="hotel-price">
        {
          detail.price > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Giá 1 đêm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(detail.price)}</span>
            </div>
            :
            <></>
        }
        {
          detail.price_promotion > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Giá khuyến mại</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(detail.price_promotion)}</span>
            </div>
            :
            <></>
        }
        {
          detail.surcharge_per_person > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Phí khách tăng thêm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(detail.surcharge_per_person)} (sau {detail.capacity_standard} khách)</span>
            </div>
            :
            <>:</>
        }
        {
          detail.min_day > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Số đêm tối thiểu</span>
              <span className="fl-item-50">{detail.min_day}</span>
            </div>
            :
            <>:</>
        }
        {
          detail.max_day > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Số đêm tối đa</span>
              <span className="fl-item-50">{detail.max_day}</span>
            </div>
            :
            <>:</>
        }
      </div>
    </section>
  );
}

export default RoomRate;
