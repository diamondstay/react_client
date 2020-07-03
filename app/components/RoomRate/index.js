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
      <p className="mb-4">Giá có thể tăng vào cuối tuần hoặc ngày lễ</p>

      <div className="hotel-price">
        {
          detail.price > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Thứ hai - Thứ năm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(detail.price)}</span>
            </div>
            :
            <></>
        }
        {
          detail.price > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Thứ sáu - Chủ nhật</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(detail.price + detail.price * 0.2)}</span>
            </div>
            :
            <>:</>
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
